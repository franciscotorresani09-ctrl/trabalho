import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, MapPin, Mail, Phone } from "lucide-react";
import { curriculos } from "../../../../../lib/mock";

interface Params {
  params: { id: string };
}

export default function CurriculoDetalhes({ params }: Params) {
  const curriculo = curriculos.find((item) => item.id === params.id);
  if (!curriculo) return notFound();

  return (
    <section className="container py-16">
      <div className="mb-8 flex items-center gap-4">
        <Link href="/sistema/paginas/curriculos" className="button button-secondary inline-flex items-center gap-2">
          <ArrowLeft className="h-4 w-4" /> Voltar
        </Link>
      </div>
      <div className="grid gap-8 lg:grid-cols-[0.9fr_0.7fr]">
        <div className="card">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-4 rounded-3xl border border-slate-200 p-6 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-700">{curriculo.cargo}</p>
                <h1 className="mt-3 text-3xl font-semibold text-slate-950">{curriculo.nome}</h1>
                <p className="mt-4 max-w-2xl text-slate-600">{curriculo.resumo}</p>
              </div>
              <img src={curriculo.imagem} alt={curriculo.nome} className="h-28 w-28 rounded-3xl object-cover" />
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
                <h2 className="text-lg font-semibold text-slate-900">Contato</h2>
                <div className="mt-4 space-y-3 text-sm text-slate-700">
                  <p className="flex items-center gap-2"><Mail className="h-4 w-4 text-brand-600" /> {curriculo.email}</p>
                  <p className="flex items-center gap-2"><Phone className="h-4 w-4 text-brand-600" /> {curriculo.telefone}</p>
                  <p className="flex items-center gap-2"><MapPin className="h-4 w-4 text-brand-600" /> {curriculo.localizacao}</p>
                </div>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
                <h2 className="text-lg font-semibold text-slate-900">Habilidades</h2>
                <div className="mt-4 flex flex-wrap gap-2">
                  {curriculo.habilidades.map((habilidade) => (
                    <span key={habilidade} className="rounded-full bg-brand-100 px-4 py-2 text-sm font-medium text-brand-800">
                      {habilidade}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
              <h2 className="mb-4 text-lg font-semibold text-slate-900">Experiência Profissional</h2>
              <div className="space-y-4">
                {curriculo.experiencias.map((item, index) => (
                  <div key={`${item.cargo}-${index}`} className="rounded-2xl bg-white p-4 shadow-sm">
                    <p className="text-sm font-semibold text-slate-900">{item.cargo} — {item.empresa}</p>
                    <p className="mt-2 text-sm text-slate-600">{item.periodo}</p>
                    <p className="mt-2 text-sm text-slate-700">{item.descricao}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
              <h2 className="mb-4 text-lg font-semibold text-slate-900">Formação Acadêmica</h2>
              <div className="space-y-4">
                {curriculo.formacoes.map((item, index) => (
                  <div key={`${item.curso}-${index}`} className="rounded-2xl bg-white p-4 shadow-sm">
                    <p className="text-sm font-semibold text-slate-900">{item.curso}</p>
                    <p className="mt-2 text-sm text-slate-600">{item.instituicao} · {item.periodo}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="card">
            <h2 className="text-lg font-semibold text-slate-900">Ações</h2>
            <div className="mt-6 space-y-4">
              <button className="button w-full">Aprovar currículo</button>
              <button className="button button-secondary w-full">Enviar feedback</button>
            </div>
          </div>
          <div className="card-soft">
            <h2 className="text-lg font-semibold text-slate-900">Resumo Rápido</h2>
            <p className="mt-4 text-slate-600">O candidato possui {curriculo.experiencias.length} experiências registradas e {curriculo.formacoes.length} formações acadêmicas.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
