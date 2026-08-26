-- NovaForça — schema inicial
-- Domínios: identidade, timeline, agenda de aulas particulares, transmissão ao vivo, notificações

create type user_role as enum ('aluno_adulto', 'responsavel', 'professor', 'admin');
create type user_status as enum ('pendente', 'ativo', 'inativo');
create type post_type as enum ('comunicado', 'mural');
create type enrollment_status as enum ('ativa', 'trancada', 'cancelada');
create type booking_status as enum ('pendente', 'confirmado', 'cancelado', 'concluido');
create type access_request_status as enum ('pendente', 'aprovado', 'negado');
create type notification_channel as enum ('email', 'whatsapp', 'push');

-- ---------- Identidade ----------

create table users (
  id uuid primary key references auth.users(id) on delete cascade,
  full_name text not null,
  email text not null unique,
  phone_whatsapp text,
  cpf text,
  role user_role not null default 'aluno_adulto',
  belt_rank text,
  belt_degree smallint default 0,
  status user_status not null default 'pendente',
  created_at timestamptz not null default now()
);

create table dependents (
  id uuid primary key default gen_random_uuid(),
  responsible_user_id uuid not null references users(id) on delete cascade,
  full_name text not null,
  birth_date date not null,
  belt_rank text,
  created_at timestamptz not null default now()
);

create table academy_classes (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  is_kids_class boolean not null default false,
  schedule_days smallint[] not null,
  start_time time not null,
  end_time time not null,
  instructor_id uuid references users(id),
  created_at timestamptz not null default now()
);

create table enrollments (
  id uuid primary key default gen_random_uuid(),
  student_id uuid references users(id) on delete cascade,
  dependent_id uuid references dependents(id) on delete cascade,
  class_id uuid not null references academy_classes(id) on delete cascade,
  status enrollment_status not null default 'ativa',
  enrolled_at timestamptz not null default now(),
  constraint one_holder_only check (
    (student_id is not null and dependent_id is null) or
    (student_id is null and dependent_id is not null)
  )
);

create table attendance (
  id uuid primary key default gen_random_uuid(),
  enrollment_id uuid not null references enrollments(id) on delete cascade,
  session_date date not null,
  present boolean not null default true,
  marked_by uuid references users(id),
  created_at timestamptz not null default now(),
  unique (enrollment_id, session_date)
);

create table graduations (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references users(id) on delete cascade,
  belt_rank text not null,
  degree smallint not null default 0,
  awarded_at date not null default current_date,
  awarded_by uuid references users(id),
  notes text
);

-- ---------- Timeline & mural ----------

create table posts (
  id uuid primary key default gen_random_uuid(),
  author_id uuid not null references users(id) on delete cascade,
  type post_type not null default 'mural',
  title text,
  body text not null,
  media_urls text[] default '{}',
  pinned boolean not null default false,
  created_at timestamptz not null default now()
);

create table post_likes (
  post_id uuid not null references posts(id) on delete cascade,
  user_id uuid not null references users(id) on delete cascade,
  created_at timestamptz not null default now(),
  primary key (post_id, user_id)
);

create table post_comments (
  id uuid primary key default gen_random_uuid(),
  post_id uuid not null references posts(id) on delete cascade,
  user_id uuid not null references users(id) on delete cascade,
  body text not null,
  created_at timestamptz not null default now()
);

-- ---------- Agenda de aulas particulares ----------

create table instructor_profiles (
  user_id uuid primary key references users(id) on delete cascade,
  bio text,
  specialties text[] default '{}',
  private_lesson_price numeric(10, 2),
  is_available_for_private boolean not null default true
);

create table instructor_availability (
  id uuid primary key default gen_random_uuid(),
  instructor_id uuid not null references instructor_profiles(user_id) on delete cascade,
  weekday smallint not null check (weekday between 0 and 6),
  start_time time not null,
  end_time time not null,
  slot_minutes smallint not null default 60
);

create table private_lesson_bookings (
  id uuid primary key default gen_random_uuid(),
  student_id uuid not null references users(id) on delete cascade,
  instructor_id uuid not null references instructor_profiles(user_id) on delete cascade,
  scheduled_at timestamptz not null,
  duration_minutes smallint not null default 60,
  status booking_status not null default 'pendente',
  notes text,
  created_at timestamptz not null default now()
);

-- ---------- Transmissão ao vivo ----------

create table livestream_sessions (
  id uuid primary key default gen_random_uuid(),
  class_id uuid not null references academy_classes(id) on delete cascade,
  stream_key text,
  scheduled_at timestamptz not null,
  status text not null default 'agendada'
);

create table livestream_access_requests (
  id uuid primary key default gen_random_uuid(),
  dependent_id uuid not null references dependents(id) on delete cascade,
  requested_by uuid not null references users(id) on delete cascade,
  status access_request_status not null default 'pendente',
  auto_approved boolean not null default false,
  approved_by uuid references users(id),
  approved_at timestamptz,
  created_at timestamptz not null default now()
);

-- ---------- Notificações & auditoria ----------

create table notifications (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references users(id) on delete cascade,
  type text not null,
  channel notification_channel not null,
  payload jsonb not null default '{}',
  sent_at timestamptz,
  read_at timestamptz,
  created_at timestamptz not null default now()
);

create table access_audit_log (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references users(id),
  resource_type text not null,
  resource_id uuid not null,
  accessed_at timestamptz not null default now()
);

-- ---------- Row Level Security ----------
-- Habilitada em todas as tabelas; políticas específicas por papel entram em
-- uma migração dedicada antes do fim da Faixa Branca (ver roadmap).

alter table users enable row level security;
alter table dependents enable row level security;
alter table academy_classes enable row level security;
alter table enrollments enable row level security;
alter table attendance enable row level security;
alter table graduations enable row level security;
alter table posts enable row level security;
alter table post_likes enable row level security;
alter table post_comments enable row level security;
alter table instructor_profiles enable row level security;
alter table instructor_availability enable row level security;
alter table private_lesson_bookings enable row level security;
alter table livestream_sessions enable row level security;
alter table livestream_access_requests enable row level security;
alter table notifications enable row level security;
alter table access_audit_log enable row level security;
