import Link from "next/link";
import { categories, getArticlesByCategory } from "@/lib/articles";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 py-10 px-4 text-zinc-900">
      <main className="mx-auto flex max-w-5xl flex-col gap-10">
        <section>
          <h1 className="text-3xl font-semibold leading-tight">
            World Insights
          </h1>
          <p className="mt-2 max-w-2xl text-zinc-600">
            Short articles about world politics, the global economy, and world
            history. Start with any topic below.
          </p>
        </section>

        <section className="grid gap-8 md:grid-cols-3">
          {categories.map((category) => {
            const categoryArticles = getArticlesByCategory(category.id);
            return (
              <div
                key={category.id}
                className="flex flex-col rounded-lg bg-white p-5 shadow-sm"
              >
                <h2 className="text-lg font-semibold">
                  {category.label}
                </h2>
                <ul className="mt-4 space-y-2 text-sm text-zinc-700">
                  {categoryArticles.map((article) => (
                    <li key={article.slug}>
                      <Link
                        href={`/articles/${article.slug}`}
                        className="font-medium text-blue-600 hover:underline"
                      >
                        {article.title}
                      </Link>
                      <p className="text-xs text-zinc-500">
                        {article.summary}
                      </p>
                    </li>
                  ))}
                  {categoryArticles.length === 0 && (
                    <li className="text-xs text-zinc-400">
                      No articles yet. Add one in lib/articles.ts.
                    </li>
                  )}
                </ul>
              </div>
            );
          })}
        </section>
      </main>
    </div>
  );
}
