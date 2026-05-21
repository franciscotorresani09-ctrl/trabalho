import { Footer } from "../components/footer";
import { Header } from "../components/header";
import "./globals.css";

export const metadata = {
  title: "Sistema de Gestão de Currículos",
  description: "Gerencie currículos com formulário dinâmico, filtros em tempo real e interface responsiva.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="bg-slate-50 text-slate-950">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
