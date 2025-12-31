import { getArticlesByCategory } from "@/lib/articles";
import Link from "next/link";

export default function PoliticsPage() {
  const politicsArticles = getArticlesByCategory("politics");

  return (
    <div className="bg-zinc-50 py-10 px-4 text-zinc-900">
      <main className="mx-auto max-w-4xl">
        <header className="mb-8">
          <h1 className="text-2xl font-semibold leading-tight">World Politics</h1>
          <p className="mt-2 text-sm text-zinc-600">
            Articles focusing on global power, diplomacy, institutions, and
            elections.
          </p>
        </header>

        <section className="space-y-4">
          {politicsArticles.map((article) => (
            <article
              key={article.slug}
              className="rounded-lg bg-white p-4 shadow-sm border border-zinc-100"
            >
              <h2 className="text-lg font-semibold">
                <Link
                  href={`/articles/${article.slug}`}
                  className="text-blue-600 hover:underline"
                >
                  {article.title}
                </Link>
              </h2>
              <p className="mt-1 text-xs text-zinc-500">
                {new Date(article.publishedAt).toLocaleDateString()}
              </p>
              <p className="mt-2 text-sm text-zinc-700">{article.summary}</p>
            </article>
          ))}

          {politicsArticles.length === 0 && (
            <p className="text-sm text-zinc-500">
              No political articles yet. Add some in lib/articles.ts.
            </p>
          )}
        </section>
      </main>
    </div>
  );
}
