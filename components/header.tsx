"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/sistema/paginas/curriculos", label: "Currículos" },
  { href: "/sistema/paginas/curriculos/novo", label: "Novo" },
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="container flex flex-col gap-6 py-6 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <Link href="/" className="text-xl font-semibold text-slate-950">
            RH Currículos
          </Link>
          <p className="text-sm text-slate-600">Interface de gestão focada em cadastro e avaliação.</p>
        </div>
        <nav className="flex flex-wrap gap-3">
          {navLinks.map((link) => {
            const isActive = pathname === link.href || (link.href !== "/" && pathname?.startsWith(link.href));
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-2xl px-4 py-3 text-sm font-medium transition ${
                  isActive ? "bg-brand-600 text-white" : "text-slate-700 hover:bg-slate-100 hover:text-slate-950"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
