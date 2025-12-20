-- Profiles table
create table if not exists public.profiles (
  id uuid references auth.users on delete cascade primary key,
  display_name text,
  avatar_url text,
  created_at timestamptz default now()
);

-- Notifications table
create table if not exists public.notifications (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references auth.users on delete cascade not null,
  title text not null,
  body text,
  read_at timestamptz,
  created_at timestamptz default now()
);

-- Subscriptions table
create table if not exists public.subscriptions (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references auth.users on delete cascade not null,
  enabled boolean default true,
  created_at timestamptz default now()
);

-- RLS
alter table public.profiles enable row level security;
alter table public.notifications enable row level security;
alter table public.subscriptions enable row level security;

create policy "Users can view their profile" on public.profiles
  for select using (auth.uid() = id);

create policy "Users can update their profile" on public.profiles
  for update using (auth.uid() = id);

create policy "Users can view their notifications" on public.notifications
  for select using (auth.uid() = user_id);

create policy "Users can update their notifications" on public.notifications
  for update using (auth.uid() = user_id);

create policy "Users can insert their notifications" on public.notifications
  for insert with check (auth.uid() = user_id);

create policy "Users can manage their subscriptions" on public.subscriptions
  for all using (auth.uid() = user_id) with check (auth.uid() = user_id);


