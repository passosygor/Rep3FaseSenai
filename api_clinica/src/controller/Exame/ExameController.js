import { prismaClient } from "../../../prisma/prisma";

class ExameController{
    constructor() { }

    async getTodosOsExames(res,_){
        try {
            const exames = await prismaClient.exame.findMany();
            return res.json(exames)
        }
        catch (e) {
            console.log(e)
        }
    }

    async getExamesPorId(res,req){
        try {
            const exames = await prismaClient.exame.findUnique({
                where: {
                    id: Number(req.params.id)
                }
            })
            if (!exames) return res.status(404).send("Exame não existe!")
            return res.json(exames)
        }
        catch (e) {
            console.log(e)
        }
    }

    async criarExames(res,req){
        try {
            const { body } = req
            const bodyKeys = Object.keys(body)
            for (const key of bodyKeys) {
                if (key !== "tipo_exame" &&
                    key !== "resultado" &&
                    key !== "data_exame" &&
                    key !== "link_arquivo" &&
                    key !== "observacoes" &&
                    key !== "paciente_id"
                ) return res.status(404).send("Colunas não existentes")
            }
            const exames = await prismaClient.exame.create({
                data: {
                    ...body,
                    data_exame: new Date(body.data_exame) // corrigir esse cara no put quando nao se manda ele... TO-DO
                },
            })
            return res.status(201).json(exames)
        } catch (error) {
            console.error(error)
        }
    }

    async atualizarExames(res,req){
        try {
            const { body, params } = req
            const bodyKeys = Object.keys(body)
            for (const key of bodyKeys) {
                if (key !== "tipo_exame" &&
                    key !== "resultado" &&
                    key !== "data_exame" &&
                    key !== "link_arquivo" &&
                    key !== "observacoes" &&
                    key !== "paciente_id"
                ) return res.status(404).send("Colunas não existentes")
            }
            await prismaClient.exame.update({
                where: { id: Number(params.id) },
                data: {
                    ...body
                },
            })
            const exameAtualizado = await prismaClient.exame.findUnique({
                where: {
                    id: Number(params.id)
                }
            })
    
            return res.status(201).json({
                message: "Exame atualizado!",
                data: exameAtualizado
            })
    
        } catch (error) {
            if (error.code == "P2025") {
                res.status(404).send("Exame não existe no banco")
            }
        }
    }

    async deletarExames(res,req){
        const { params } = req
    try {
        const exameDeletado = await prismaClient.exame.delete({
            where: {
                id: Number(params.id),
            },
        })
        res.status(200).json({
            message: "Exame deletado!",
            data: exameDeletado
        })
    } catch (error) {
        if (error.code == "P2025") {
            res.status(404).send("Exame não existe no banco")
        }
    }
    }

}

export const ExameController = new ExameController();