import { Router } from "express";
import { ConsultaController } from "../controller/Consulta/ConsultaController";
export const consultasRouter = Router();

consultasRouter.get('/consultas', ConsultaController.getTodosAsConsultas);

consultasRouter.get("/consultas/:id", ConsultaController.getConsultasPorId);

consultasRouter.post("/consultas", ConsultaController.atualizarConsultas);

consultasRouter.put("/consultas/:id", ConsultaController.atualizarConsultas);

consultasRouter.delete("/consultas/:id", ConsultaController.deletarConsultas);
