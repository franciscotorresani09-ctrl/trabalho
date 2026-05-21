"use client";

import Link from "next/link";
import { useMemo, useState, useEffect } from "react";
import { Search, ArrowRight } from "lucide-react";
import { curriculos, type Curriculo } from "../../../../lib/mock";
import { CurriculoCard } from "../../../../components/curriculo-card";

export default function CurriculosPage() {
  const [filter, setFilter] = useState("");
  const [items, setItems] = useState<Curriculo[]>([]);

  useEffect(() => {
    const stored = globalThis?.localStorage?.getItem("curriculos-v1");
    if (stored) {
      try {
        setItems(JSON.parse(stored));
        return;
      } catch {
        setItems(curriculos);
      }
    }
    setItems(curriculos);
  }, []);

  const filtered = useMemo(() => {
    const term = filter.toLowerCase();
    return items.filter((item) => item.nome.toLowerCase().includes(term) || item.cargo.toLowerCase().includes(term));
  }, [filter, items]);

  return (
    <section className="container py-16">
      <div className="mb-10 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-700">Currículos</p>
          <h1 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950">Lista de candidatos</h1>
          <p className="mt-2 text-slate-600">Filtre por nome ou cargo para encontrar o perfil ideal rapidamente.</p>
        </div>
        <div className="relative max-w-md">
          <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
          <input
            value={filter}
            onChange={(event) => setFilter(event.target.value)}
            placeholder="Buscar por nome ou cargo"
            className="input pl-11"
          />
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {filtered.map((curriculo) => (
          <CurriculoCard key={curriculo.id} curriculo={curriculo} />
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="card-soft mt-10 text-center">
          <p className="text-slate-700">Nenhum currículo encontrado com esse filtro. Tente outro nome ou cargo.</p>
        </div>
      )}
    </section>
  );
}
