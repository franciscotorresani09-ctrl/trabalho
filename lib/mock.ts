export interface Experiencia {
  cargo: string;
  empresa: string;
  periodo: string;
  descricao: string;
}

export interface Formacao {
  curso: string;
  instituicao: string;
  periodo: string;
}

export interface Curriculo {
  id: string;
  imagem: string;
  nome: string;
  cargo: string;
  resumo: string;
  email: string;
  telefone: string;
  localizacao: string;
  habilidades: string[];
  experiencias: Experiencia[];
  formacoes: Formacao[];
}

export const curriculos: Curriculo[] = [
  {
    id: "1",
    imagem: "/avatar-1.svg",
    nome: "Mariana da Silva",
    cargo: "Analista de Recursos Humanos",
    resumo: "Profissional com cinco anos de experiência em recrutamento, seleção e gestão de performance.",
    email: "mariana.silva@email.com",
    telefone: "(11) 98765-4321",
    localizacao: "São Paulo, SP",
    habilidades: ["Recrutamento", "Entrevistas", "Treinamento"],
    experiencias: [
      {
        cargo: "Analista de RH",
        empresa: "Empresa Alpha",
        periodo: "2021 - 2024",
        descricao: "Condução de processos de seleção, integração de novos colaboradores e suporte a líderes."
      }
    ],
    formacoes: [
      {
        curso: "Bacharelado em Psicologia",
        instituicao: "Universidade Federal de São Paulo",
        periodo: "2017 - 2020"
      }
    ]
  },
  {
    id: "2",
    imagem: "/avatar-2.svg",
    nome: "João Pereira",
    cargo: "Coordenador de Treinamento",
    resumo: "Aprimora competências internas com foco em desenvolvimento de líderes e cultura organizacional.",
    email: "joao.pereira@email.com",
    telefone: "(21) 99988-7766",
    localizacao: "Rio de Janeiro, RJ",
    habilidades: ["Liderança", "Mentoria", "Gestão de projetos"],
    experiencias: [
      {
        cargo: "Coordenador de Treinamento",
        empresa: "Consultoria Beta",
        periodo: "2020 - 2024",
        descricao: "Planejamento de trilhas de aprendizagem e análise de impacto de programas de desenvolvimento."
      }
    ],
    formacoes: [
      {
        curso: "MBA em Gestão de Pessoas",
        instituicao: "Fundação Getulio Vargas",
        periodo: "2021 - 2023"
      }
    ]
  }
];
