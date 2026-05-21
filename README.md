# RH Currículos

Projeto de interface para gestão de currículos usando Next.js App Router, Tailwind CSS, React Hook Form, Yup, React Input Mask Next e Sonner.

## Como usar

1. Instale o Node.js e npm.
2. Execute `npm install`.
3. Execute `npm run dev`.

## Páginas implementadas

- `/` - landing page do sistema
- `/sistema/paginas/curriculos` - lista de currículos com busca em tempo real
- `/sistema/paginas/curriculos/[id]` - detalhes do currículo
- `/sistema/paginas/curriculos/novo` - cadastro com campos dinâmicos e validação

## Funcionalidades

- Validação completa com React Hook Form e Yup
- Field arrays para experiências e formações
- Busca em tempo real por nome ou cargo
- Persistência mockada em `localStorage`
- Máscaras de CPF e telefone
- Feedback via Sonner toast

## Observações

Se o terminal não reconhecer `npm`, instale o Node.js e reinicie o VS Code.
