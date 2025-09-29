import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient();

async function main() {
  await prisma.usuario.createMany({
    data: [
      { nome:"Joao", 
        email: "joao34@email.com", 
        senha: "123",
        cargo: "Médico"
      },
    ],
  });

  await prisma.paciente.create({
    data: {
      nome: "João",
      sexo: "Masculino",
      data_nascimento: new Date("1980-12-11"),
      cpf: "958.521.251.65",
      telefone: "952556232",
      email: "joao@email.com",
    },
  });

  await prisma.consulta.createMany({
    data: [
      {
        motivo: "Dor nas costas",
        data_consulta: new Date("2023-08-25"),
        observacoes: "Ibuprofeno 3 vezes ao dia",
        medico_responsavel_id: 1,
        paciente_id: 1
      },
      {
        motivo: "Dor nas costas",
        data_consulta: new Date("2023-08-25"),
        observacoes: "Ibuprofeno 3 vezes ao dia",
        medico_responsavel_id: 1,
        paciente_id: 1
      }, {
        motivo: "Dor nas costas",
        data_consulta: new Date("2023-08-25"),
        observacoes: "Ibuprofeno 3 vezes ao dia",
        medico_responsavel_id: 1,
        paciente_id: 1
      }, {
        motivo: "Dor nas costas",
        data_consulta: new Date("2023-08-25"),
        observacoes: "Ibuprofeno 3 vezes ao dia",
        medico_responsavel_id: 1,
        paciente_id: 1
      }, {
        motivo: "Dor nas costas",
        data_consulta: new Date("2023-08-25"),
        observacoes: "Ibuprofeno 3 vezes ao dia",
        medico_responsavel_id: 1,
        paciente_id: 1
      }, {
        motivo: "Dor nas costas",
        data_consulta: new Date("2023-08-25"),
        observacoes: "Ibuprofeno 3 vezes ao dia",
        medico_responsavel_id: 1,
        paciente_id: 1
      }, {
        motivo: "Dor nas costas",
        data_consulta: new Date("2023-08-25"),
        observacoes: "Ibuprofeno 3 vezes ao dia",
        medico_responsavel_id: 1,
        paciente_id: 1
      }, {
        motivo: "Dor nas costas",
        data_consulta: new Date("2023-08-25"),
        observacoes: "Ibuprofeno 3 vezes ao dia",
        medico_responsavel_id: 1,
        paciente_id: 1
      }, {
        motivo: "Dor nas costas",
        data_consulta: new Date("2023-08-25"),
        observacoes: "Ibuprofeno 3 vezes ao dia",
        medico_responsavel_id: 1,
        paciente_id: 1
      }, {
        motivo: "Dor nas costas",
        data_consulta: new Date("2023-08-25"),
        observacoes: "Ibuprofeno 3 vezes ao dia",
        medico_responsavel_id: 1,
        paciente_id: 1
      }, {
        motivo: "Dor nas costas",
        data_consulta: new Date("2023-08-25"),
        observacoes: "Ibuprofeno 3 vezes ao dia",
        medico_responsavel_id: 1,
        paciente_id: 1
      }, {
        motivo: "Dor nas costas",
        data_consulta: new Date("2023-08-25"),
        observacoes: "Ibuprofeno 3 vezes ao dia",
        medico_responsavel_id: 1,
        paciente_id: 1
      }, {
        motivo: "Dor nas costas",
        data_consulta: new Date("2023-08-25"),
        observacoes: "Ibuprofeno 3 vezes ao dia",
        medico_responsavel_id: 1,
        paciente_id: 1
      }, {
        motivo: "Dor nas costas",
        data_consulta: new Date("2023-08-25"),
        observacoes: "Ibuprofeno 3 vezes ao dia",
        medico_responsavel_id: 1,
        paciente_id: 1
      }, {
        motivo: "Dor nas costas",
        data_consulta: new Date("2023-08-25"),
        observacoes: "Ibuprofeno 3 vezes ao dia",
        medico_responsavel_id: 1,
        paciente_id: 1
      }, {
        motivo: "Dor nas costas",
        data_consulta: new Date("2023-08-25"),
        observacoes: "Ibuprofeno 3 vezes ao dia",
        medico_responsavel_id: 1,
        paciente_id: 1
      }, {
        motivo: "Dor nas costas",
        data_consulta: new Date("2023-08-25"),
        observacoes: "Ibuprofeno 3 vezes ao dia",
        medico_responsavel_id: 1,
        paciente_id: 1
      }, {
        motivo: "Dor nas costas",
        data_consulta: new Date("2023-08-25"),
        observacoes: "Ibuprofeno 3 vezes ao dia",
        medico_responsavel_id: 1,
        paciente_id: 1
      }, {
        motivo: "Dor nas costas",
        data_consulta: new Date("2023-08-25"),
        observacoes: "Ibuprofeno 3 vezes ao dia",
        medico_responsavel_id: 1,
        paciente_id: 1
      }, {
        motivo: "Dor nas costas",
        data_consulta: new Date("2023-08-25"),
        observacoes: "Ibuprofeno 3 vezes ao dia",
        medico_responsavel_id: 1,
        paciente_id: 1
      }, {
        motivo: "Dor nas costas",
        data_consulta: new Date("2023-08-25"),
        observacoes: "Ibuprofeno 3 vezes ao dia",
        medico_responsavel_id: 1,
        paciente_id: 1
      }, {
        motivo: "Dor nas costas",
        data_consulta: new Date("2023-08-25"),
        observacoes: "Ibuprofeno 3 vezes ao dia",
        medico_responsavel_id: 1,
        paciente_id: 1
      }, {
        motivo: "Dor nas costas",
        data_consulta: new Date("2023-08-25"),
        observacoes: "Ibuprofeno 3 vezes ao dia",
        medico_responsavel_id: 1,
        paciente_id: 1
      }, {
        motivo: "Dor nas costas",
        data_consulta: new Date("2023-08-25"),
        observacoes: "Ibuprofeno 3 vezes ao dia",
        medico_responsavel_id: 1,
        paciente_id: 1
      }, {
        motivo: "Dor nas costas",
        data_consulta: new Date("2023-08-25"),
        observacoes: "Ibuprofeno 3 vezes ao dia",
        medico_responsavel_id: 1,
        paciente_id: 1
      }, {
        motivo: "Dor nas costas",
        data_consulta: new Date("2023-08-25"),
        observacoes: "Ibuprofeno 3 vezes ao dia",
        medico_responsavel_id: 1,
        paciente_id: 1
      }, {
        motivo: "Dor nas costas",
        data_consulta: new Date("2023-08-25"),
        observacoes: "Ibuprofeno 3 vezes ao dia",
        medico_responsavel_id: 1,
        paciente_id: 1
      }, {
        motivo: "Dor nas costas",
        data_consulta: new Date("2023-08-25"),
        observacoes: "Ibuprofeno 3 vezes ao dia",
        medico_responsavel_id: 1,
        paciente_id: 1
      }, {
        motivo: "Dor nas costas",
        data_consulta: new Date("2023-08-25"),
        observacoes: "Ibuprofeno 3 vezes ao dia",
        medico_responsavel_id: 1,
        paciente_id: 1
      }, {
        motivo: "Dor nas costas",
        data_consulta: new Date("2023-08-25"),
        observacoes: "Ibuprofeno 3 vezes ao dia",
        medico_responsavel_id: 1,
        paciente_id: 1
      }, {
        motivo: "Dor nas costas",
        data_consulta: new Date("2023-08-25"),
        observacoes: "Ibuprofeno 3 vezes ao dia",
        medico_responsavel_id: 1,
        paciente_id: 1
      }, {
        motivo: "Dor nas costas",
        data_consulta: new Date("2023-08-25"),
        observacoes: "Ibuprofeno 3 vezes ao dia",
        medico_responsavel_id: 1,
        paciente_id: 1
      }, {
        motivo: "Dor nas costas",
        data_consulta: new Date("2023-08-25"),
        observacoes: "Ibuprofeno 3 vezes ao dia",
        medico_responsavel_id: 1,
        paciente_id: 1
      }, {
        motivo: "Dor nas costas",
        data_consulta: new Date("2023-08-25"),
        observacoes: "Ibuprofeno 3 vezes ao dia",
        medico_responsavel_id: 1,
        paciente_id: 1
      }, {
        motivo: "Dor nas costas",
        data_consulta: new Date("2023-08-25"),
        observacoes: "Ibuprofeno 3 vezes ao dia",
        medico_responsavel_id: 1,
        paciente_id: 1
      }, {
        motivo: "Dor nas costas",
        data_consulta: new Date("2023-08-25"),
        observacoes: "Ibuprofeno 3 vezes ao dia",
        medico_responsavel_id: 1,
        paciente_id: 1
      }, {
        motivo: "Dor nas costas",
        data_consulta: new Date("2023-08-25"),
        observacoes: "Ibuprofeno 3 vezes ao dia",
        medico_responsavel_id: 1,
        paciente_id: 1
      }, {
        motivo: "Dor nas costas",
        data_consulta: new Date("2023-08-25"),
        observacoes: "Ibuprofeno 3 vezes ao dia",
        medico_responsavel_id: 1,
        paciente_id: 1
      }, {
        motivo: "Dor nas costas",
        data_consulta: new Date("2023-08-25"),
        observacoes: "Ibuprofeno 3 vezes ao dia",
        medico_responsavel_id: 1,
        paciente_id: 1
      }, {
        motivo: "Dor nas costas",
        data_consulta: new Date("2023-08-25"),
        observacoes: "Ibuprofeno 3 vezes ao dia",
        medico_responsavel_id: 1,
        paciente_id: 1
      }, {
        motivo: "Dor nas costas",
        data_consulta: new Date("2023-08-25"),
        observacoes: "Ibuprofeno 3 vezes ao dia",
        medico_responsavel_id: 1,
        paciente_id: 1
      }, {
        motivo: "Dor nas costas",
        data_consulta: new Date("2023-08-25"),
        observacoes: "Ibuprofeno 3 vezes ao dia",
        medico_responsavel_id: 1,
        paciente_id: 1
      }, {
        motivo: "Dor nas costas",
        data_consulta: new Date("2023-08-25"),
        observacoes: "Ibuprofeno 3 vezes ao dia",
        medico_responsavel_id: 1,
        paciente_id: 1
      }, {
        motivo: "Dor nas costas",
        data_consulta: new Date("2023-08-25"),
        observacoes: "Ibuprofeno 3 vezes ao dia",
        medico_responsavel_id: 1,
        paciente_id: 1
      }, {
        motivo: "Dor nas costas",
        data_consulta: new Date("2023-08-25"),
        observacoes: "Ibuprofeno 3 vezes ao dia",
        medico_responsavel_id: 1,
        paciente_id: 1
      }, {
        motivo: "Dor nas costas",
        data_consulta: new Date("2023-08-25"),
        observacoes: "Ibuprofeno 3 vezes ao dia",
        medico_responsavel_id: 1,
        paciente_id: 1
      }, {
        motivo: "Dor nas costas",
        data_consulta: new Date("2023-08-25"),
        observacoes: "Ibuprofeno 3 vezes ao dia",
        medico_responsavel_id: 1,
        paciente_id: 1
      }, {
        motivo: "Dor nas costas",
        data_consulta: new Date("2023-08-25"),
        observacoes: "Ibuprofeno 3 vezes ao dia",
        medico_responsavel_id: 1,
        paciente_id: 1
      }, {
        motivo: "Dor nas costas",
        data_consulta: new Date("2023-08-25"),
        observacoes: "Ibuprofeno 3 vezes ao dia",
        medico_responsavel_id: 1,
        paciente_id: 1
      }, {
        motivo: "Dor nas costas",
        data_consulta: new Date("2023-08-25"),
        observacoes: "Ibuprofeno 3 vezes ao dia",
        medico_responsavel_id: 1,
        paciente_id: 1
      }, {
        motivo: "Dor nas costas",
        data_consulta: new Date("2023-08-25"),
        observacoes: "Ibuprofeno 3 vezes ao dia",
        medico_responsavel_id: 1,
        paciente_id: 1
      }, {
        motivo: "Dor nas costas",
        data_consulta: new Date("2023-08-25"),
        observacoes: "Ibuprofeno 3 vezes ao dia",
        medico_responsavel_id: 1,
        paciente_id: 1
      }, {
        motivo: "Dor nas costas",
        data_consulta: new Date("2023-08-25"),
        observacoes: "Ibuprofeno 3 vezes ao dia",
        medico_responsavel_id: 1,
        paciente_id: 1
      }, {
        motivo: "Dor nas costas",
        data_consulta: new Date("2023-08-25"),
        observacoes: "Ibuprofeno 3 vezes ao dia",
        medico_responsavel_id: 1,
        paciente_id: 1
      }, {
        motivo: "Dor nas costas",
        data_consulta: new Date("2023-08-25"),
        observacoes: "Ibuprofeno 3 vezes ao dia",
        medico_responsavel_id: 1,
        paciente_id: 1
      }, {
        motivo: "Dor nas costas",
        data_consulta: new Date("2023-08-25"),
        observacoes: "Ibuprofeno 3 vezes ao dia",
        medico_responsavel_id: 1,
        paciente_id: 1
      }, {
        motivo: "Dor nas costas",
        data_consulta: new Date("2023-08-25"),
        observacoes: "Ibuprofeno 3 vezes ao dia",
        medico_responsavel_id: 1,
        paciente_id: 1
      }, {
        motivo: "Dor nas costas",
        data_consulta: new Date("2023-08-25"),
        observacoes: "Ibuprofeno 3 vezes ao dia",
        medico_responsavel_id: 1,
        paciente_id: 1
      }, {
        motivo: "Dor nas costas",
        data_consulta: new Date("2023-08-25"),
        observacoes: "Ibuprofeno 3 vezes ao dia",
        medico_responsavel_id: 1,
        paciente_id: 1
      }, {
        motivo: "Dor nas costas",
        data_consulta: new Date("2023-08-25"),
        observacoes: "Ibuprofeno 3 vezes ao dia",
        medico_responsavel_id: 1,
        paciente_id: 1
      }, {
        motivo: "Dor nas costas",
        data_consulta: new Date("2023-08-25"),
        observacoes: "Ibuprofeno 3 vezes ao dia",
        medico_responsavel_id: 1,
        paciente_id: 1
      }, {
        motivo: "Dor nas costas",
        data_consulta: new Date("2023-08-25"),
        observacoes: "Ibuprofeno 3 vezes ao dia",
        medico_responsavel_id: 1,
        paciente_id: 1
      }, {
        motivo: "Dor nas costas",
        data_consulta: new Date("2023-08-25"),
        observacoes: "Ibuprofeno 3 vezes ao dia",
        medico_responsavel_id: 1,
        paciente_id: 1
      }, {
        motivo: "Dor nas costas",
        data_consulta: new Date("2023-08-25"),
        observacoes: "Ibuprofeno 3 vezes ao dia",
        medico_responsavel_id: 1,
        paciente_id: 1
      }, {
        motivo: "Dor nas costas",
        data_consulta: new Date("2023-08-25"),
        observacoes: "Ibuprofeno 3 vezes ao dia",
        medico_responsavel_id: 1,
        paciente_id: 1
      }, {
        motivo: "Dor nas costas",
        data_consulta: new Date("2023-08-25"),
        observacoes: "Ibuprofeno 3 vezes ao dia",
        medico_responsavel_id: 1,
        paciente_id: 1
      }, {
        motivo: "Dor nas costas",
        data_consulta: new Date("2023-08-25"),
        observacoes: "Ibuprofeno 3 vezes ao dia",
        medico_responsavel_id: 1,
        paciente_id: 1
      }, {
        motivo: "Dor nas costas",
        data_consulta: new Date("2023-08-25"),
        observacoes: "Ibuprofeno 3 vezes ao dia",
        medico_responsavel_id: 1,
        paciente_id: 1
      }, {
        motivo: "Dor nas costas",
        data_consulta: new Date("2023-08-25"),
        observacoes: "Ibuprofeno 3 vezes ao dia",
        medico_responsavel_id: 1,
        paciente_id: 1
      }, {
        motivo: "Dor nas costas",
        data_consulta: new Date("2023-08-25"),
        observacoes: "Ibuprofeno 3 vezes ao dia",
        medico_responsavel_id: 1,
        paciente_id: 1
      }, {
        motivo: "Dor nas costas",
        data_consulta: new Date("2023-08-25"),
        observacoes: "Ibuprofeno 3 vezes ao dia",
        medico_responsavel_id: 1,
        paciente_id: 1
      }, {
        motivo: "Dor nas costas",
        data_consulta: new Date("2023-08-25"),
        observacoes: "Ibuprofeno 3 vezes ao dia",
        medico_responsavel_id: 1,
        paciente_id: 1
      }, {
        motivo: "Dor nas costas",
        data_consulta: new Date("2023-08-25"),
        observacoes: "Ibuprofeno 3 vezes ao dia",
        medico_responsavel_id: 1,
        paciente_id: 1
      }, {
        motivo: "Dor nas costas",
        data_consulta: new Date("2023-08-25"),
        observacoes: "Ibuprofeno 3 vezes ao dia",
        medico_responsavel_id: 1,
        paciente_id: 1
      }, {
        motivo: "Dor nas costas",
        data_consulta: new Date("2023-08-25"),
        observacoes: "Ibuprofeno 3 vezes ao dia",
        medico_responsavel_id: 1,
        paciente_id: 1
      }, {
        motivo: "Dor nas costas",
        data_consulta: new Date("2023-08-25"),
        observacoes: "Ibuprofeno 3 vezes ao dia",
        medico_responsavel_id: 1,
        paciente_id: 1
      }, {
        motivo: "Dor nas costas",
        data_consulta: new Date("2023-08-25"),
        observacoes: "Ibuprofeno 3 vezes ao dia",
        medico_responsavel_id: 1,
        paciente_id: 1
      }, {
        motivo: "Dor nas costas",
        data_consulta: new Date("2023-08-25"),
        observacoes: "Ibuprofeno 3 vezes ao dia",
        medico_responsavel_id: 1,
        paciente_id: 1
      }, {
        motivo: "Dor nas costas",
        data_consulta: new Date("2023-08-25"),
        observacoes: "Ibuprofeno 3 vezes ao dia",
        medico_responsavel_id: 1,
        paciente_id: 1
      }, {
        motivo: "Dor nas costas",
        data_consulta: new Date("2023-08-25"),
        observacoes: "Ibuprofeno 3 vezes ao dia",
        medico_responsavel_id: 1,
        paciente_id: 1
      }, {
        motivo: "Dor nas costas",
        data_consulta: new Date("2023-08-25"),
        observacoes: "Ibuprofeno 3 vezes ao dia",
        medico_responsavel_id: 1,
        paciente_id: 1
      }, {
        motivo: "Dor nas costas",
        data_consulta: new Date("2023-08-25"),
        observacoes: "Ibuprofeno 3 vezes ao dia",
        medico_responsavel_id: 1,
        paciente_id: 1
      }, {
        motivo: "Dor nas costas",
        data_consulta: new Date("2023-08-25"),
        observacoes: "Ibuprofeno 3 vezes ao dia",
        medico_responsavel_id: 1,
        paciente_id: 1
      }, {
        motivo: "Dor nas costas",
        data_consulta: new Date("2023-08-25"),
        observacoes: "Ibuprofeno 3 vezes ao dia",
        medico_responsavel_id: 1,
        paciente_id: 1
      }, {
        motivo: "Dor nas costas",
        data_consulta: new Date("2023-08-25"),
        observacoes: "Ibuprofeno 3 vezes ao dia",
        medico_responsavel_id: 1,
        paciente_id: 1
      }, {
        motivo: "Dor nas costas",
        data_consulta: new Date("2023-08-25"),
        observacoes: "Ibuprofeno 3 vezes ao dia",
        medico_responsavel_id: 1,
        paciente_id: 1
      }, {
        motivo: "Dor nas costas",
        data_consulta: new Date("2023-08-25"),
        observacoes: "Ibuprofeno 3 vezes ao dia",
        medico_responsavel_id: 1,
        paciente_id: 1
      }, {
        motivo: "Dor nas costas",
        data_consulta: new Date("2023-08-25"),
        observacoes: "Ibuprofeno 3 vezes ao dia",
        medico_responsavel_id: 1,
        paciente_id: 1
      }, {
        motivo: "Dor nas costas",
        data_consulta: new Date("2023-08-25"),
        observacoes: "Ibuprofeno 3 vezes ao dia",
        medico_responsavel_id: 1,
        paciente_id: 1
      }, {
        motivo: "Dor nas costas",
        data_consulta: new Date("2023-08-25"),
        observacoes: "Ibuprofeno 3 vezes ao dia",
        medico_responsavel_id: 1,
        paciente_id: 1
      }, {
        motivo: "Dor nas costas",
        data_consulta: new Date("2023-08-25"),
        observacoes: "Ibuprofeno 3 vezes ao dia",
        medico_responsavel_id: 1,
        paciente_id: 1
      }, {
        motivo: "Dor nas costas",
        data_consulta: new Date("2023-08-25"),
        observacoes: "Ibuprofeno 3 vezes ao dia",
        medico_responsavel_id: 1,
        paciente_id: 1
      }, {
        motivo: "Dor nas costas",
        data_consulta: new Date("2023-08-25"),
        observacoes: "Ibuprofeno 3 vezes ao dia",
        medico_responsavel_id: 1,
        paciente_id: 1
      }, {
        motivo: "Dor nas costas",
        data_consulta: new Date("2023-08-25"),
        observacoes: "Ibuprofeno 3 vezes ao dia",
        medico_responsavel_id: 1,
        paciente_id: 1
      }, {
        motivo: "Dor nas costas",
        data_consulta: new Date("2023-08-25"),
        observacoes: "Ibuprofeno 3 vezes ao dia",
        medico_responsavel_id: 1,
        paciente_id: 1
      }, {
        motivo: "Dor nas costas",
        data_consulta: new Date("2023-08-25"),
        observacoes: "Ibuprofeno 3 vezes ao dia",
        medico_responsavel_id: 1,
        paciente_id: 1
      },
    ]
  });

   await prisma.prontuario.createMany({
    data: [
      { descricao: "Doença bem loca",
        data: new Date("2025-12-11"),
        medico_responsavel_id: 1,
        paciente_id: 1
      },
      { descricao: "Doença bem loca",
        data: new Date("2025-12-11"),
        medico_responsavel_id: 1,
        paciente_id: 1
      },
      { descricao: "Doença bem loca",
        data: new Date("2025-12-11"),
        medico_responsavel_id: 1,
        paciente_id: 1
      },
      { descricao: "Doença bem loca",
        data: new Date("2025-12-11"),
        medico_responsavel_id: 1,
        paciente_id: 1
      },
      { descricao: "Doença bem loca",
        data: new Date("2025-12-11"),
        medico_responsavel_id: 1,
        paciente_id: 1
      }
    ],
  });

     await prisma.exame.createMany({
    data: [
      { tipo_exame: "toxicologico",
        resultado: "péssimo",
        data_exame: new Date("2025-12-11"),
        link_arquivo: "alosaude/exame.com.br",
        observacoes: "tomar cuidado nas festas",
        paciente_id: 1
      },
       { tipo_exame: "toxicologico",
        resultado: "péssimo",
        data_exame: new Date("2025-12-11"),
        link_arquivo: "alosaude/exame.com.br",
        observacoes: "tomar cuidado nas festas",
        paciente_id: 1
      },
       { tipo_exame: "toxicologico",
        resultado: "péssimo",
        data_exame: new Date("2025-12-11"),
        link_arquivo: "alosaude/exame.com.br",
        observacoes: "tomar cuidado nas festas",
        paciente_id: 1
      },
       { tipo_exame: "toxicologico",
        resultado: "péssimo",
        data_exame: new Date("2025-12-11"),
        link_arquivo: "alosaude/exame.com.br",
        observacoes: "tomar cuidado nas festas",
        paciente_id: 1
      },
       { tipo_exame: "toxicologico",
        resultado: "péssimo",
        data_exame: new Date("2025-12-11"),
        link_arquivo: "alosaude/exame.com.br",
        observacoes: "tomar cuidado nas festas",
        paciente_id: 1
      },  
    ],
  });


}

main()
  .then(() => prisma.$disconnect())
  .catch((e) => {
    console.error(e);
    prisma.$disconnect();
    process.exit(1);
  });




