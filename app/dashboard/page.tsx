"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Article, getArticles } from "@/lib/articles";
import { getTimelines, Timeline } from "@/lib/timelines";
import { aboutPage, disclaimerPage, sourcesPage } from "@/lib/staticPages";

export default function DashboardPage() {
  const router = useRouter();
  const [authorized, setAuthorized] = useState(false);
  const [articles, setArticles] = useState<Article[]>(getArticles());
  const [timelines] = useState<Timeline[]>(getTimelines());

  useEffect(() => {
    if (typeof window === "undefined") return;
    const isAdmin = window.localStorage.getItem("isAdmin");
    if (isAdmin === "true") {
      setAuthorized(true);
    } else {
      router.replace("/dashboard/login");
    }
  }, [router]);

  if (!authorized) {
    return null;
  }

  const handleArticleChange = (
    index: number,
    field: keyof Article,
    value: string,
  ) => {
    setArticles((prev) => {
      const copy = [...prev];
      copy[index] = { ...copy[index], [field]: value };
      return copy;
    });
  };

  return (
    <div className="min-h-[calc(100vh-96px)] bg-zinc-50 py-10 px-4 text-zinc-900">
      <main className="mx-auto max-w-5xl space-y-10">
        <header>
          <h1 className="text-2xl font-semibold leading-tight">Admin Board</h1>
          <p className="mt-2 text-xs text-zinc-600">
            Simple demo dashboard. Changes you make here update what you see in
            this session only. To make content permanent, edit the files in the
            <span className="font-mono"> lib/</span> folder directly.
          </p>
        </header>

        <section className="space-y-4 rounded-lg bg-white p-5 shadow-sm border border-zinc-100">
          <h2 className="text-lg font-semibold">Articles</h2>
          <p className="text-xs text-zinc-600">
            Edit titles and summaries here to experiment with how the site
            looks. Use the values you like as a reference when updating
            lib/articles.ts.
          </p>
          <div className="space-y-4 text-sm">
            {articles.map((article, index) => (
              <div
                key={article.slug}
                className="rounded border border-zinc-200 p-3 space-y-2"
              >
                <p className="text-[11px] uppercase tracking-wide text-zinc-500">
                  {article.category} · slug: {article.slug}
                </p>
                <label className="block space-y-1">
                  <span className="text-xs font-medium text-zinc-700">
                    Title
                  </span>
                  <input
                    className="w-full rounded border border-zinc-300 px-2 py-1 text-sm focus:border-blue-500 focus:outline-none"
                    value={article.title}
                    onChange={(e) =>
                      handleArticleChange(index, "title", e.target.value)
                    }
                  />
                </label>
                <label className="block space-y-1">
                  <span className="text-xs font-medium text-zinc-700">
                    Summary
                  </span>
                  <textarea
                    className="w-full rounded border border-zinc-300 px-2 py-1 text-sm focus:border-blue-500 focus:outline-none"
                    rows={2}
                    value={article.summary}
                    onChange={(e) =>
                      handleArticleChange(index, "summary", e.target.value)
                    }
                  />
                </label>
                <label className="block space-y-1">
                  <span className="text-xs font-medium text-zinc-700">
                    Published at (date)
                  </span>
                  <input
                    className="w-full rounded border border-zinc-300 px-2 py-1 text-sm focus:border-blue-500 focus:outline-none"
                    value={article.publishedAt}
                    onChange={(e) =>
                      handleArticleChange(index, "publishedAt", e.target.value)
                    }
                  />
                </label>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-4 rounded-lg bg-white p-5 shadow-sm border border-zinc-100">
          <h2 className="text-lg font-semibold">Timelines (read-only)</h2>
          <p className="text-xs text-zinc-600">
            These values come from <span className="font-mono">lib/timelines.ts</span>.
          </p>
          <div className="space-y-3 text-sm">
            {timelines.map((timeline) => (
              <div
                key={timeline.id}
                className="rounded border border-zinc-200 p-3 space-y-1"
              >
                <p className="text-[11px] uppercase tracking-wide text-zinc-500">
                  {timeline.category} · {timeline.id}
                </p>
                <p className="font-semibold">{timeline.title}</p>
                <p className="text-xs text-zinc-500">{timeline.period}</p>
                <p className="text-xs text-zinc-700">{timeline.summary}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-4 rounded-lg bg-white p-5 shadow-sm border border-zinc-100">
          <h2 className="text-lg font-semibold">Static Pages (read-only)</h2>
          <p className="text-xs text-zinc-600">
            Content below is loaded from <span className="font-mono">lib/staticPages.ts</span>.
          </p>
          <div className="grid gap-4 md:grid-cols-3 text-xs">
            <div className="space-y-1">
              <h3 className="font-semibold">{aboutPage.title}</h3>
              {aboutPage.paragraphs.map((p) => (
                <p key={p} className="text-zinc-700">
                  {p}
                </p>
              ))}
            </div>
            <div className="space-y-1">
              <h3 className="font-semibold">{sourcesPage.title}</h3>
              <p className="text-zinc-700">{sourcesPage.intro}</p>
              <ul className="list-disc pl-4 text-zinc-700">
                {sourcesPage.bulletPoints.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="space-y-1">
              <h3 className="font-semibold">{disclaimerPage.title}</h3>
              {disclaimerPage.paragraphs.map((p) => (
                <p key={p} className="text-zinc-700">
                  {p}
                </p>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
