import { Router } from "express";
import { ProntuarioController } from "../controller/Prontuario/ProntuarioController";
export const prontuarioRouter = Router();
// Prontuario
prontuarioRouter.get('/prontuarios', ProntuarioController.getTodosOsProntuarios);

prontuarioRouter.get("/prontuarios/:id", ProntuarioController.getProntuarioPorId);

prontuarioRouter.post("/prontuarios", ProntuarioController.criarProntuario);

prontuarioRouter.put("/prontuarios/:id", ProntuarioController.atualizarProntuario);

prontuarioRouter.delete("/prontuarios/:id", ProntuarioController.deletarProntuario);
