import { disclaimerPage } from "@/lib/staticPages";

export default function DisclaimerPage() {
  return (
    <div className="bg-zinc-50 py-10 px-4 text-zinc-900">
      <main className="mx-auto max-w-3xl space-y-4">
        <h1 className="text-2xl font-semibold leading-tight">
          {disclaimerPage.title}
        </h1>
        {disclaimerPage.paragraphs.map((paragraph) => (
          <p key={paragraph} className="text-sm text-zinc-700">
            {paragraph}
          </p>
        ))}
      </main>
    </div>
  );
}
