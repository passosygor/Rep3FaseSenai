import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient();

async function main() {

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


  await prisma.exame.create({
    data: [
      {
      tipo_exame: "toxicologico",
      resultado: "normal",
      data_exame: "2025-09-08",
      link_arquivo: "google.com/exame.pdf",
      observacoes: "toma cuidado com ai coisas erradas",
      medico_responsavel_id: 1
    },
    {
      tipo_exame: "toxicologico",
      resultado: "normal",
      data_exame: "2025-09-08",
      link_arquivo: "google.com/exame.pdf",
      observacoes: "toma cuidado com ai coisas erradas",
      medico_responsavel_id: 1
    },
    {
      tipo_exame: "toxicologico",
      resultado: "normal",
      data_exame: "2025-09-08",
      link_arquivo: "google.com/exame.pdf",
      observacoes: "toma cuidado com ai coisas erradas",
      medico_responsavel_id: 1
    },
    {
      tipo_exame: "toxicologico",
      resultado: "normal",
      data_exame: "2025-09-08",
      link_arquivo: "google.com/exame.pdf",
      observacoes: "toma cuidado com ai coisas erradas",
      medico_responsavel_id: 1
    },
    {
      tipo_exame: "toxicologico",
      resultado: "normal",
      data_exame: "2025-09-08",
      link_arquivo: "google.com/exame.pdf",
      observacoes: "toma cuidado com ai coisas erradas",
      medico_responsavel_id: 1
    },{
      tipo_exame: "toxicologico",
      resultado: "normal",
      data_exame: "2025-09-08",
      link_arquivo: "google.com/exame.pdf",
      observacoes: "toma cuidado com ai coisas erradas",
      medico_responsavel_id: 1
    }
  ],
   });


   await prisma.paciente.create({
    data: [
      {
      nome: "João",
      sexo: "Masculino",
      data_nascimento: new Date("1980-12-11"),
      cpf: "958.521.251.65",
      telefone: 952556232,
      email: "joao@email.com"
    },
    {
      nome: "João",
      sexo: "Masculino",
      data_nascimento: new Date("1980-12-11"),
      cpf: "958.521.251.65",
      telefone: 952556232,
      email: "joao@email.com"
    },
    {
      nome: "João",
      sexo: "Masculino",
      data_nascimento: new Date("1980-12-11"),
      cpf: "958.521.251.65",
      telefone: 952556232,
      email: "joao@email.com"
    },
    {
      nome: "João",
      sexo: "Masculino",
      data_nascimento: new Date("1980-12-11"),
      cpf: "958.521.251.65",
      telefone: 952556232,
      email: "joao@email.com"
    },
    {
      nome: "João",
      sexo: "Masculino",
      data_nascimento: new Date("1980-12-11"),
      cpf: "958.521.251.65",
      telefone: 952556232,
      email: "joao@email.com"
    },
    {
      nome: "João",
      sexo: "Masculino",
      data_nascimento: new Date("1980-12-11"),
      cpf: "958.521.251.65",
      telefone: 952556232,
      email: "joao@email.com"
    }
    ],
     });


  await prisma.prontuario.create({
    data:[
    {
    descricao: "doença bem loca",
    data: "2025-09-15",
    medico_responsavel_id: 1
    },
    {
    descricao: "doença bem loca",
    data: "2025-09-15",
    medico_responsavel_id: 1
    },
    {
    descricao: "doença bem loca",
    data: "2025-09-15",
    medico_responsavel_id: 1
    },
    {
    descricao: "doença bem loca",
    data: "2025-09-15",
    medico_responsavel_id: 1
    },
    {
    descricao: "doença bem loca",
    data: "2025-09-15",
    medico_responsavel_id: 1
    },
    {
    descricao: "doença bem loca",
    data: "2025-09-15",
    medico_responsavel_id: 1
    }
      ]
     });


  await prisma.usuario.createMany({
    data: [
      { nome:"Joao", 
        email: "joao34@email.com", 
        senha: "123",
        cargo: "Médico"
      },
      { nome:"Joao", 
        email: "joao34@email.com", 
        senha: "123",
        cargo: "Médico"
      },
      { nome:"Joao", 
        email: "joao34@email.com", 
        senha: "123",
        cargo: "Médico"
      },
      { nome:"Joao", 
        email: "joao34@email.com", 
        senha: "123",
        cargo: "Médico"
      },
      { nome:"Joao", 
        email: "joao34@email.com", 
        senha: "123",
        cargo: "Médico"
      },
      { nome:"Joao", 
        email: "joao34@email.com", 
        senha: "123",
        cargo: "Médico"
      }
    ],
  });

main()
  .then(() => prisma.$disconnect())
  .catch((e) => {
    console.error(e);
    prisma.$disconnect();
    process.exit(1);
  });

}
