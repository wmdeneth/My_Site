import { getTimelines } from "@/lib/timelines";

export default function TimelinesPage() {
  const timelines = getTimelines();

  return (
    <div className="bg-zinc-50 py-10 px-4 text-zinc-900">
      <main className="mx-auto max-w-4xl space-y-8">
        <header className="mb-2">
          <h1 className="text-2xl font-semibold leading-tight">Timelines</h1>
          <p className="mt-2 text-sm text-zinc-600">
            Chronological views of conflicts, elections, economic crises, and
            major historical periods.
          </p>
        </header>

        {timelines.map((timeline) => (
          <section
            key={timeline.id}
            className="rounded-lg bg-white p-5 shadow-sm border border-zinc-100"
          >
            <h2 className="text-lg font-semibold">{timeline.title}</h2>
            <p className="text-xs text-zinc-500">{timeline.period}</p>
            <p className="mt-2 text-sm text-zinc-700">{timeline.summary}</p>
            <ul className="mt-4 space-y-2 border-l border-zinc-200 pl-4 text-sm text-zinc-700">
              {timeline.events.map((event) => (
                <li key={event.label}>
                  <p className="font-medium">
                    <span className="text-xs uppercase tracking-wide text-zinc-500">
                      {event.date}
                    </span>
                    <span className="mx-1 text-zinc-400">·</span>
                    {event.label}
                  </p>
                  <p className="text-xs text-zinc-600">{event.detail}</p>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </main>
    </div>
  );
}
