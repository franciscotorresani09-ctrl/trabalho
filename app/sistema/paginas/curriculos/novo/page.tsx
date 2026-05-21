"use client";
import { useEffect, useState } from "react";
import { useFieldArray, useForm, type SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast, Toaster } from "sonner";
import { useRouter } from "next/navigation";
import { curriculoSchema, type CurriculoFormValues } from "../../../../../lib/validation";
import { curriculos as mockCurriculos, type Curriculo } from "../../../../../lib/mock";
import { Button } from "../../../../../components/ui/button";
import { Input } from "../../../../../components/ui/input";
import { Label } from "../../../../../components/ui/label";
import { Textarea } from "../../../../../components/ui/textarea";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NovoCurriculoPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const {
    register,
    control,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm<CurriculoFormValues>({
    resolver: yupResolver(curriculoSchema),
    defaultValues: {
      nome: "",
      cargo: "",
      email: "",
      telefone: "",
      cpf: "",
      resumo: "",
      experiencias: [{ cargo: "", empresa: "", periodo: "", descricao: "" }],
      formacoes: [{ curso: "", instituicao: "", periodo: "" }],
      habilidades: [""],
    },
    mode: "onChange",
  });

  const experiencias = useFieldArray({ control, name: "experiencias" });
  const formacoes = useFieldArray({ control, name: "formacoes" });
  const habilidades = useFieldArray({ control, name: "habilidades" });

  useEffect(() => {
    if (!globalThis?.localStorage?.getItem("curriculos-v1")) {
      globalThis?.localStorage?.setItem("curriculos-v1", JSON.stringify(mockCurriculos));
    }
  }, []);

  const onSubmit: SubmitHandler<CurriculoFormValues> = (data) => {
    setLoading(true);
    try {
      const saved = globalThis?.localStorage?.getItem("curriculos-v1");
      const existing: Curriculo[] = saved ? JSON.parse(saved) : mockCurriculos;
      const newCurriculo: Curriculo = {
        id: String(Date.now()),
        imagem: "/avatar-1.svg",
        nome: data.nome,
        cargo: data.cargo,
        resumo: data.resumo,
        email: data.email,
        telefone: data.telefone,
        localizacao: "São Paulo, SP",
        habilidades: data.habilidades.filter(Boolean),
        experiencias: data.experiencias,
        formacoes: data.formacoes,
      };
      const updated = [newCurriculo, ...existing];
      globalThis?.localStorage?.setItem("curriculos-v1", JSON.stringify(updated));
      toast.success("Currículo salvo com sucesso.");
      reset();
      router.push("/sistema/paginas/curriculos");
    } catch (error) {
      toast.error("Falha ao salvar o currículo. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="container py-16">
      <Toaster position="top-right" richColors />
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-700">Cadastro</p>
          <h1 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950">Novo currículo</h1>
          <p className="mt-2 max-w-2xl text-slate-600">Preencha os dados abaixo. Todos os campos são validados e oferecem retorno imediato.</p>
        </div>
        <Link href="/sistema/paginas/curriculos" className="button button-secondary inline-flex items-center gap-2">
          <ArrowLeft className="h-4 w-4" /> Voltar para lista
        </Link>
      </div>

      <form className="space-y-8" onSubmit={handleSubmit(onSubmit)}>
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <Label htmlFor="nome">Nome</Label>
            <Input id="nome" {...register("nome")} placeholder="Nome completo" />
            {errors.nome && <p className="mt-2 text-sm text-red-600">{errors.nome.message}</p>}
          </div>
          <div>
            <Label htmlFor="cargo">Cargo desejado</Label>
            <Input id="cargo" {...register("cargo")} placeholder="Ex: Analista de RH" />
            {errors.cargo && <p className="mt-2 text-sm text-red-600">{errors.cargo.message}</p>}
          </div>
          <div>
            <Label htmlFor="email">E-mail</Label>
            <Input id="email" type="email" {...register("email")} placeholder="nome@empresa.com" />
            {errors.email && <p className="mt-2 text-sm text-red-600">{errors.email.message}</p>}
          </div>
          <div>
            <Label htmlFor="telefone">Telefone</Label>
            <Input id="telefone" {...register("telefone")} placeholder="(11) 99999-9999" pattern="\\(\\d{2}\\) \\d{5}-\\d{4}" />
            {errors.telefone && <p className="mt-2 text-sm text-red-600">{errors.telefone.message}</p>}
          </div>
          <div>
            <Label htmlFor="cpf">CPF</Label>
            <Input id="cpf" {...register("cpf")} placeholder="000.000.000-00" pattern="\\d{3}\\.\\d{3}\\.\\d{3}-\\d{2}" />
            {errors.cpf && <p className="mt-2 text-sm text-red-600">{errors.cpf.message}</p>}
          </div>
        </div>

        <div>
          <Label htmlFor="resumo">Resumo profissional</Label>
          <Textarea id="resumo" {...register("resumo")} placeholder="Descreva sua experiência e objetivos" />
          {errors.resumo && <p className="mt-2 text-sm text-red-600">{errors.resumo.message}</p>}
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <h2 className="text-lg font-semibold text-slate-900">Experiências profissionais</h2>
              <p className="text-sm text-slate-600">Adicione todas as experiências relevantes.</p>
            </div>
            <button type="button" className="button button-secondary" onClick={() => experiencias.append({ cargo: "", empresa: "", periodo: "", descricao: "" })}>
              Adicionar experiência
            </button>
          </div>
          <div className="space-y-6">
            {experiencias.fields.map((field, index) => (
              <div key={field.id} className="space-y-4 rounded-3xl border border-slate-200 bg-slate-50 p-5">
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <Label htmlFor={`experiencias.${index}.cargo`}>Cargo</Label>
                    <Input id={`experiencias.${index}.cargo`} {...register(`experiencias.${index}.cargo` as const)} placeholder="Cargo ocupado" />
                  </div>
                  <div>
                    <Label htmlFor={`experiencias.${index}.empresa`}>Empresa</Label>
                    <Input id={`experiencias.${index}.empresa`} {...register(`experiencias.${index}.empresa` as const)} placeholder="Nome da empresa" />
                  </div>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <Label htmlFor={`experiencias.${index}.periodo`}>Período</Label>
                    <Input id={`experiencias.${index}.periodo`} {...register(`experiencias.${index}.periodo` as const)} placeholder="Ex: 2021 - 2024" />
                  </div>
                </div>
                <div>
                  <Label htmlFor={`experiencias.${index}.descricao`}>Descrição</Label>
                  <Textarea id={`experiencias.${index}.descricao`} {...register(`experiencias.${index}.descricao` as const)} placeholder="Responsabilidades e resultados" />
                </div>
                <button type="button" className="button button-secondary w-full" onClick={() => experiencias.remove(index)}>
                  Remover experiência
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <h2 className="text-lg font-semibold text-slate-900">Formação acadêmica</h2>
              <p className="text-sm text-slate-600">Adicione cursos e diplomas relevantes.</p>
            </div>
            <button type="button" className="button button-secondary" onClick={() => formacoes.append({ curso: "", instituicao: "", periodo: "" })}>
              Adicionar formação
            </button>
          </div>
          <div className="space-y-6">
            {formacoes.fields.map((field, index) => (
              <div key={field.id} className="space-y-4 rounded-3xl border border-slate-200 bg-slate-50 p-5">
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <Label htmlFor={`formacoes.${index}.curso`}>Curso</Label>
                    <Input id={`formacoes.${index}.curso`} {...register(`formacoes.${index}.curso` as const)} placeholder="Nome do curso" />
                  </div>
                  <div>
                    <Label htmlFor={`formacoes.${index}.instituicao`}>Instituição</Label>
                    <Input id={`formacoes.${index}.instituicao`} {...register(`formacoes.${index}.instituicao` as const)} placeholder="Nome da instituição" />
                  </div>
                </div>
                <div>
                  <Label htmlFor={`formacoes.${index}.periodo`}>Período</Label>
                  <Input id={`formacoes.${index}.periodo`} {...register(`formacoes.${index}.periodo` as const)} placeholder="Ex: 2018 - 2022" />
                </div>
                <button type="button" className="button button-secondary w-full" onClick={() => formacoes.remove(index)}>
                  Remover formação
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <h2 className="text-lg font-semibold text-slate-900">Habilidades</h2>
              <p className="text-sm text-slate-600">Liste as competências e ferramentas que domina.</p>
            </div>
            <button type="button" className="button button-secondary" onClick={() => habilidades.append("")}>Adicionar habilidade</button>
          </div>
          <div className="space-y-4">
            {habilidades.fields.map((field, index) => (
              <div key={field.id} className="grid gap-4 md:grid-cols-[1fr_auto]">
                <Input {...register(`habilidades.${index}` as const)} placeholder="Ex: Gestão de talentos" />
                <button type="button" className="button button-secondary" onClick={() => habilidades.remove(index)}>
                  Remover
                </button>
                {errors.habilidades?.[index] && (
                  <p className="mt-2 text-sm text-red-600">{errors.habilidades[index]?.message}</p>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-end">
          <Button type="submit" disabled={!isValid || loading}>{loading ? "Salvando..." : "Salvar currículo"}</Button>
        </div>
      </form>
    </section>
  );
}
