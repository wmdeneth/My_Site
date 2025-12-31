import Link from "next/link";
import { getArticles } from "@/lib/articles";

export default function ArticlesPage() {
  const articles = getArticles();

  return (
    <div className="min-h-screen bg-zinc-50 py-10 px-4 text-zinc-900">
      <main className="mx-auto max-w-4xl">
        <header className="mb-8">
          <h1 className="text-2xl font-semibold leading-tight">All Articles</h1>
          <p className="mt-2 text-sm text-zinc-600">
            Politics, economy, and history articles in one place.
          </p>
        </header>

        <section className="space-y-4">
          {articles.map((article) => (
            <article
              key={article.slug}
              className="rounded-lg bg-white p-4 shadow-sm border border-zinc-100"
            >
              <p className="text-xs uppercase tracking-wide text-zinc-500">
                {article.category}
              </p>
              <h2 className="mt-1 text-lg font-semibold">
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

          {articles.length === 0 && (
            <p className="text-sm text-zinc-500">
              No articles yet. Add some in lib/articles.ts.
            </p>
          )}
        </section>
      </main>
    </div>
  );
}
