import * as yup from "yup";

export interface ExperienciaForm {
  cargo: string;
  empresa: string;
  periodo: string;
  descricao: string;
}

export interface FormacaoForm {
  curso: string;
  instituicao: string;
  periodo: string;
}

export interface CurriculoFormValues {
  nome: string;
  cargo: string;
  email: string;
  telefone: string;
  cpf: string;
  resumo: string;
  experiencias: ExperienciaForm[];
  formacoes: FormacaoForm[];
  habilidades: string[];
}

const experienciaSchema = yup.object({
  cargo: yup.string().required("O cargo é obrigatório."),
  empresa: yup.string().required("A empresa é obrigatória."),
  periodo: yup.string().required("O período é obrigatório."),
  descricao: yup.string().min(10, "A descrição precisa ter ao menos 10 caracteres.").required("A descrição é obrigatória."),
});

const formacaoSchema = yup.object({
  curso: yup.string().required("O curso é obrigatório."),
  instituicao: yup.string().required("A instituição é obrigatória."),
  periodo: yup.string().required("O período é obrigatório."),
});

export const curriculoSchema = yup.object({
  nome: yup.string().min(3, "O nome deve ter ao menos 3 caracteres.").required("Nome é obrigatório."),
  cargo: yup.string().min(3, "O cargo deve ter ao menos 3 caracteres.").required("Cargo é obrigatório."),
  email: yup.string().email("Email inválido.").required("Email é obrigatório."),
  telefone: yup.string().matches(/\(\d{2}\) \d{5}-\d{4}/, "Telefone inválido."),
  cpf: yup.string().matches(/\d{3}\.\d{3}\.\d{3}-\d{2}/, "CPF inválido."),
  resumo: yup.string().min(20, "O resumo deve ter ao menos 20 caracteres.").required("Resumo é obrigatório."),
  experiencias: yup.array().of(experienciaSchema).min(1, "Adicione ao menos uma experiência."),
  formacoes: yup.array().of(formacaoSchema).min(1, "Adicione ao menos uma formação."),
  habilidades: yup.array().of(yup.string().required("Habilidade não pode ficar em branco.")).min(1, "Adicione ao menos uma habilidade."),
});
