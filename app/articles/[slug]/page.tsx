import { notFound } from "next/navigation";
import Link from "next/link";
import { getArticleBySlug, getArticles } from "@/lib/articles";

interface ArticlePageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  const all = getArticles();
  return all.map((article) => ({ slug: article.slug }));
}

export default function ArticlePage({ params }: ArticlePageProps) {
  const article = getArticleBySlug(params.slug);

  if (!article) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-zinc-50 py-10 px-4 text-zinc-900">
      <main className="mx-auto max-w-3xl bg-white p-6 shadow-sm">
        <p className="text-sm uppercase tracking-wide text-zinc-500">
          {article.category}
        </p>
        <h1 className="mt-2 text-3xl font-semibold leading-tight">
          {article.title}
        </h1>
        <p className="mt-1 text-sm text-zinc-500">
          {new Date(article.publishedAt).toLocaleDateString()}
        </p>
        <article className="mt-6 space-y-4 leading-relaxed text-zinc-800">
          <p>{article.content}</p>
        </article>
        <div className="mt-8">
          <Link
            href="/"
            className="text-sm font-medium text-blue-600 hover:underline"
          >
            ← Back to all topics
          </Link>
        </div>
      </main>
    </div>
  );
}
