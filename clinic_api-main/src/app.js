// Path: src/app.js

import express from "express";
import cors from "cors";

import { usuarioRouter } from "./routes/usuarios.js";
import { pacientesRouter } from "./routes/pacientes.js";
import { consultasRouter } from "./routes/consulta.js";
import { prontuarioRouter } from "./routes/prontuario.js";
import { exameRouter } from "./routes/exame.js";

const app = express();

// Middlewares globais
app.use(cors()); // libera CORS
app.use(express.json()); // interpreta JSON do body

// Teste rápido para saber se o servidor responde
app.get("/ping", (req, res) => {
  console.log("📌 GET /ping chegou");
  res.send("pong");
});

// Rotas
app.use(usuarioRouter);
app.use(exameRouter);
app.use(pacientesRouter);
app.use(prontuarioRouter);
app.use(consultasRouter);

const port = 3000;
app.listen(port, () => console.log(`Api rodando na porta ${port}`));
