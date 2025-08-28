import { Router } from "express";
import { PacienteController } from "../controller/Paciente/PacienteController";
export const pacientesRouter = Router()

// Pacientes
pacientesRouter.get('/pacientes', PacienteController.getTodosOsPacientes);

pacientesRouter.get("/pacientes/:id", PacienteController.getPacientePorId);

pacientesRouter.post("/pacientes", PacienteController.criarPacientes);

pacientesRouter.put("/pacientes/:id", PacienteController.atualizarPacientes);

pacientesRouter.delete("/pacientes/:id", PacienteController.deletarPacientes);

