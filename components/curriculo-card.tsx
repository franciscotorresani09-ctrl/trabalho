import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Curriculo } from "../lib/mock";

export function CurriculoCard({ curriculo }: { curriculo: Curriculo }) {
  return (
    <article className="card group">
      <div className="flex items-center gap-4">
        <img src={curriculo.imagem} alt={curriculo.nome} className="h-20 w-20 rounded-3xl object-cover" />
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-700">{curriculo.cargo}</p>
          <h2 className="mt-2 text-xl font-semibold text-slate-950">{curriculo.nome}</h2>
        </div>
      </div>
      <p className="mt-6 text-slate-600">{curriculo.resumo}</p>
      <div className="mt-6 flex items-center justify-between gap-4">
        <Link href={`/sistema/paginas/curriculos/${curriculo.id}`} className="button inline-flex items-center gap-2 text-sm">
          Ver detalhes <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </article>
  );
}
