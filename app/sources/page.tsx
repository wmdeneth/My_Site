import { sourcesPage } from "@/lib/staticPages";

export default function SourcesPage() {
  return (
    <div className="bg-zinc-50 py-10 px-4 text-zinc-900">
      <main className="mx-auto max-w-3xl space-y-4">
        <h1 className="text-2xl font-semibold leading-tight">
          {sourcesPage.title}
        </h1>
        <p className="text-sm text-zinc-700">{sourcesPage.intro}</p>
        <ul className="list-disc space-y-1 pl-5 text-sm text-zinc-700">
          {sourcesPage.bulletPoints.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
        <p className="text-xs text-zinc-500">{sourcesPage.note}</p>
      </main>
    </div>
  );
}
