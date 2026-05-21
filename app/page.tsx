import Link from "next/link";
import { Briefcase, Sparkles } from "lucide-react";

export default function HomePage() {
  return (
    <section className="container py-16">
      <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] items-center">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-brand-100 px-4 py-2 text-sm font-semibold text-brand-700">
            <Sparkles className="h-4 w-4" />
            Sistema de Gestão de Currículos
          </span>
          <h1 className="mt-8 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
            Transforme o cadastro e a busca de currículos em uma experiência simples e profissional.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-8 text-slate-700">
            Construa e gerencie currículos com cadastro validado, filtros em tempo real e uma navegação clara para processo seletivo e avaliação de candidatos.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/sistema/paginas/curriculos/novo" className="button">
              Novo currículo
            </Link>
            <Link href="/sistema/paginas/curriculos" className="button button-secondary">
              Ver currículos
            </Link>
          </div>
        </div>

        <div className="card-soft">
          <div className="flex items-center gap-4 rounded-3xl bg-brand-600/5 p-6">
            <Briefcase className="h-6 w-6 text-brand-600" />
            <div>
              <p className="text-sm font-semibold text-brand-900">Experiências dinâmicas</p>
              <p className="mt-1 text-slate-600">Campos adicionáveis e validação organizada para cada experiência.</p>
            </div>
          </div>
          <div className="mt-6 space-y-4">
            <div className="rounded-3xl bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold text-slate-900">Busca instantânea</p>
              <p className="mt-2 text-sm text-slate-600">Filtros por nome ou cargo com atualização em tempo real.</p>
            </div>
            <div className="rounded-3xl bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold text-slate-900">Feedback amigável</p>
              <p className="mt-2 text-sm text-slate-600">Notificações claras para sucesso ou erros de validação.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
