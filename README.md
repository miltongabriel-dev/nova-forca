# NovaForça

Webapp/PWA para gestão, acompanhamento e engajamento de alunos e responsáveis de uma academia de Jiu-Jitsu.

Stack: Next.js 14 (App Router) + TypeScript + Tailwind, Supabase (Postgres/Auth/Storage/Realtime), Mux para transmissão ao vivo, Resend + WhatsApp Cloud API para notificações.

## Estrutura

```
app/
  (auth)/        login, cadastro, magic-link
  (app)/         timeline, perfil, agenda, transmissão — área logada
  (admin)/admin/ usuários, aprovações, avisos — painel administrativo
  api/webhooks/  webhooks externos (Mux, etc.)
lib/
  supabase/      clients de browser, server e middleware
  types/         tipos gerados do banco (database.types.ts)
supabase/
  migrations/    schema do banco (SQL)
  config.toml    configuração do projeto Supabase local
```

Este esqueleto ainda não tem dependências instaladas nem projeto Supabase remoto conectado — ver "Setup" abaixo.

## Setup

1. `npm install`
2. Criar projeto no [Supabase](https://supabase.com), copiar URL e chaves para `.env.local` (baseado em `.env.example`)
3. `npx supabase link --project-ref <ref>` e `npx supabase db push` para aplicar a migração inicial
4. `npx supabase gen types typescript --linked > lib/types/database.types.ts`
5. `npm run dev`

## Roadmap

Plano de sprints em progressão de faixas (Branca → Preta) na proposta técnica do projeto.
