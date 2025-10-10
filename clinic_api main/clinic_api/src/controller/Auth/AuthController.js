import bcrypt from "bcrypt";
import { PrismaClient } from '@prisma/client';
const prismaClient = new PrismaClient();    

const signAccessToken = (payload) => "access_token_" + Date.now();
const signRefreshToken = (payload) => "refresh_token_" + Date.now();
const verifyRefresh = (token) => ({ userId: "1", email: "test@test.com", name: "Test" });

class AuthController {
    constructor() { }

    async register(req, res) {
        try {
            const { email, senha, nome } = req.body;
            if (!email || !senha) {
                return res.status(400).json({ error: "Email e senha são obrigatórios" });
            }
            
            const existingUser = await prismaClient.usuario.findUnique({
                where: { email },
            });
            if (existingUser) {
                return res.status(409).json({ error: "Usuário já existe" });
            }
            
            const saltRounds = 10;
            const hashedPassword = await bcrypt.hash(senha, saltRounds); // ✅ CORRIGIDO: senha
            
            const usuario = await prismaClient.usuario.create({ // ✅ CORRIGIDO: usuario
                data: { email, senha: hashedPassword, nome: nome || null },
                select: {
                    id: true,
                    email: true,
                    nome: true,
                },
            });
            return res.status(201).json(usuario); // ✅ CORRIGIDO: usuario
        } catch (error) {
            console.error("Erro no registro:", error);
            return res.status(500).json({ error: "Erro interno do servidor" });
        }
    };

    async login(req, res) {
        try {
            const { email, senha } = req.body;
            const user = await prismaClient.usuario.findUnique({ where: { email } });
            if (!user || !(await bcrypt.compare(senha, user.senha))) {
                return res.status(401).json({ error: "Credenciais inválidas" });
            }
            
            const accessToken = signAccessToken({
                userId: user.id,
                email: user.email,
                nome: user.nome,
            });

            const refreshToken = signRefreshToken({
                userId: user.id,
                email: user.email,
                nome: user.nome,
            });
            
            const expiresAt = new Date();
            expiresAt.setDate(expiresAt.getDate() + 7);
            
            await prismaClient.token.create({
                data: {
                    token: refreshToken,
                    type: "refresh",
                    usuarioId: user.id, // ✅ CORRIGIDO: usuarioId (se sua tabela tem esse campo)
                    expiresAt,
                },
            });
            
            return res.status(200).json({
                accessToken,
                refreshToken,
                user: {
                    id: user.id,
                    email: user.email,
                    nome: user.nome,
                },
            });
        } catch (error) {
            console.error("Erro no login:", error);
            return res.status(500).json({ error: "Erro interno do servidor" });
        }
    };

    async logout(req, res) {
        const { refreshToken } = req.body;
        try {
            const storedRefreshToken = await prismaClient.token.findFirst({
                where: { token: refreshToken },
            });
            if (!storedRefreshToken || storedRefreshToken.revoked || storedRefreshToken.expiresAt < new Date()) {
                return res.status(401).json({ error: "invalid refresh token" });
            }

            await prismaClient.token.updateMany({
                where: { id: storedRefreshToken?.id ?? 0 },
                data: { revoked: true },
            });
            
            return res.status(200).json("Usuário deslogado!");
        } catch (error) {
            return res.status(400).json(error);
        }
    }
}

export const authController = new AuthController();