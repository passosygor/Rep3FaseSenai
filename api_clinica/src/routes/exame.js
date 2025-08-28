import { Router } from "express";
import { ExameController } from "../controller/Exame/ExameController";
export const exameRouter = Router()

exameRouter.get('/exames', ExameController.getTodosOsExames);

exameRouter.get("/exames/:id", ExameController.getExamesPorId)

exameRouter.post("/exames", ExameController.criarExames)

exameRouter.put("/exames/:id", ExameController.atualizarExames)

exameRouter.delete("/exames/:id", ExameController.deletarExames)
