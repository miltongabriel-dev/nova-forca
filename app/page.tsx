import Link from "next/link";
import { ShieldCheck, Handshake, Users, Flame, ArrowRight, CalendarDays, Info, MapPin, Sparkles } from "lucide-react";
import { Logo } from "@/components/brand/logo";
import { PageSilhouette } from "@/components/brand/page-silhouette";
import { ButtonLink } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { WeeklyScheduleCards } from "@/components/landing/weekly-schedule-cards";
import { EventsPreview } from "@/components/landing/events-preview";
import { InstructorGrid } from "@/components/landing/instructor-grid";
import { pillars, disciplines, aboutUs, weekDays, weekSchedule, team } from "@/lib/mock-data";

const pillarIcons = [ShieldCheck, Handshake, Users, Flame];

const tracks = [
  {
    title: "Kids",
    age: "6 to 13 years",
    desc: "Coordination, focus and respect for the rules — learning to defend themselves and hold their own while having fun.",
  },
  {
    title: "Adults",
    age: "14 and up",
    desc: "From white belt to black belt: conditioning, confidence and a skill set that lasts a lifetime. BJJ, Muay Thai and MMA.",
  },
  {
    title: "Family",
    age: "Open mats",
    desc: "Classes and open mats where parents and kids get on the mats together. Jiu-jitsu that gets trained at home too.",
  },
];

export default function HomePage() {
  return (
    <main className="min-h-dvh bg-bg">
      <PageSilhouette />
      <div className="bg-[#111111] px-5 py-2.5 text-center text-xs italic text-[#ffffff]/80">
        &ldquo;{aboutUs.quote}&rdquo; <span className="not-italic">— {aboutUs.quoteAuthor}</span>
      </div>

      <header className="border-b border-border">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-4">
          <Link href="/">
            <Logo height={48} />
          </Link>
          <div className="flex items-center gap-1.5 sm:gap-2">
            <ButtonLink href="/login" variant="ghost" size="sm">
              Sign in
            </ButtonLink>
            <ButtonLink href="/signup" size="sm">
              <span className="sm:hidden">Join</span>
              <span className="hidden sm:inline">Create account</span>
            </ButtonLink>
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-3xl px-5 pb-10 pt-10 text-center sm:pb-12 sm:pt-14">
        <span className="inline-flex items-center gap-2 rounded-full bg-accent-soft px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-accent-strong">
          BJJ · Muay Thai · MMA — for the whole family
        </span>
        <h1 className="font-display mt-5 text-4xl uppercase leading-[1.05] tracking-wide text-ink sm:text-6xl">
          From white belt to <span className="text-accent">black belt</span> of life
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-ink-muted sm:text-lg">
          More than a gym: a place where kids, teens and adults build character, discipline
          and family bonds — on and off the mats.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <ButtonLink href="/signup" size="lg" className="w-full sm:w-auto">
            Enrol my family <ArrowRight size={18} />
          </ButtonLink>
          <ButtonLink href="/login" variant="outline" size="lg" className="w-full sm:w-auto">
            I'm already a student
          </ButtonLink>
        </div>
        <div className="mx-auto mt-10 flex max-w-lg flex-col gap-4 border-t border-border pt-6 text-sm text-ink-muted sm:flex-row sm:justify-center sm:gap-8">
          <span className="flex items-center justify-center gap-2">
            <Sparkles size={16} className="text-accent" /> 3 disciplines under one roof
          </span>
          <span className="flex items-center justify-center gap-2">
            <MapPin size={16} className="text-accent" /> Multiple locations
          </span>
          <span className="flex items-center justify-center gap-2">
            <Users size={16} className="text-accent" /> Beginners to advanced
          </span>
        </div>
      </section>

      <section className="border-y border-border bg-surface py-14">
        <div className="mx-auto max-w-5xl px-5">
          <h2 className="font-display text-center text-2xl tracking-wide text-ink">
            We Build Citizens, Not Just Belts
          </h2>
          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {pillars.map((pillar, i) => {
              const Icon = pillarIcons[i] ?? ShieldCheck;
              return (
                <div key={pillar.title} className="flex flex-col items-center text-center">
                  <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-accent-soft text-accent">
                    <Icon size={22} />
                  </div>
                  <p className="font-display text-sm uppercase tracking-wide text-ink">
                    {pillar.title}
                  </p>
                  <p className="mt-1 text-xs leading-relaxed text-ink-muted">{pillar.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 py-14">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-[1fr_1.2fr] sm:items-center">
          <div>
            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-accent-soft text-accent">
              <Info size={18} />
            </div>
            <h2 className="font-display text-2xl tracking-wide text-ink">About Us</h2>
            <p className="mt-3 text-sm leading-relaxed text-ink-muted">{aboutUs.body}</p>
            <ButtonLink href="/signup" className="mt-6">
              Get in touch <ArrowRight size={18} />
            </ButtonLink>
          </div>
          <div className="grid grid-cols-1 gap-3">
            {disciplines.map((d) => (
              <Card key={d.name} className="p-5">
                <p className="font-display text-lg text-ink">{d.name}</p>
                <p className="mt-1 text-sm leading-relaxed text-ink-muted">{d.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="bg-accent px-5 py-8 text-accent-on">
          <div className="mx-auto flex max-w-5xl items-start gap-3">
            <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/15">
              <CalendarDays size={18} />
            </div>
            <div>
              <h2 className="font-display text-2xl leading-tight">Our week on the mats</h2>
              <p className="text-sm text-accent-on/80">
                A preview of the timetable and what's on at the academy.
              </p>
            </div>
          </div>
        </div>
        <div className="mx-auto max-w-5xl px-5 py-10">
          <h3 className="mb-3 font-display text-base text-ink">Weekly timetable</h3>
          <WeeklyScheduleCards weekDays={weekDays} weekSchedule={weekSchedule} />
          <p className="mt-4 text-xs text-ink-muted">
            This is just a taste — the full timetable has options every day, across multiple
            locations.
          </p>

          <h3 className="mb-3 mt-10 font-display text-base text-ink">Upcoming events</h3>
          <EventsPreview />
        </div>
      </section>

      <section className="border-y border-border bg-surface px-5 py-14">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display text-center text-2xl tracking-wide text-ink">
            Our Instructors
          </h2>
          <p className="mx-auto mt-2 max-w-md text-center text-sm text-ink-muted">
            The team behind every class, every stripe, every belt.
          </p>
          <div className="mt-8">
            <InstructorGrid team={team} />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 py-14">
        <h2 className="font-display text-center text-2xl tracking-wide text-ink">
          One Team, Three Generations
        </h2>
        <p className="mx-auto mt-2 max-w-md text-center text-sm text-ink-muted">
          Classes built for every stage of life, at the same club and in the same family
          spirit.
        </p>
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {tracks.map((track) => (
            <Card key={track.title} className="p-6">
              <p className="font-display text-xl uppercase tracking-wide text-ink">
                {track.title}
              </p>
              <p className="mb-3 text-xs font-bold uppercase tracking-wide text-accent">
                {track.age}
              </p>
              <p className="text-sm leading-relaxed text-ink-muted">{track.desc}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="bg-[#111111] py-16">
        <div className="mx-auto max-w-2xl px-5 text-center">
          <h2 className="font-display text-3xl tracking-wide text-[#ffffff]">
            Your Family's Journey Starts Today
          </h2>
          <p className="mt-3 text-sm text-[#ffffff]/70">
            Free sign-up. Track attendance, gradings and the community wall in one place.
          </p>
          <ButtonLink href="/signup" size="lg" className="mt-7">
            Create your free account <ArrowRight size={18} />
          </ButtonLink>
        </div>
      </section>

      <footer className="mx-auto flex max-w-5xl flex-col items-center gap-4 px-5 py-14 text-center">
        <Logo height={80} />
        <p className="max-w-xs text-xs text-ink-faint">
          NovaForça — building belts and citizens from the ground up.
        </p>
        <div className="flex items-center gap-4 text-xs font-semibold text-ink-muted">
          <Link href="/login" className="hover:text-accent">
            Sign in
          </Link>
          <span className="text-ink-faint">·</span>
          <Link href="/signup" className="hover:text-accent">
            Create account
          </Link>
        </div>
      </footer>
    </main>
  );
}
