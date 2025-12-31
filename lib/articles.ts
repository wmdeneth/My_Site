export const categories = [
  { id: "politics", label: "World Politics" },
  { id: "economy", label: "World Economy" },
  { id: "history", label: "World History" },
] as const;

export type CategoryId = (typeof categories)[number]["id"];

export type Article = {
  slug: string;
  title: string;
  category: CategoryId;
  summary: string;
  content: string;
  publishedAt: string; // ISO date string
};

export const articles: Article[] = [
  {
    slug: "shifting-power-in-a-multipolar-world",
    title: "Shifting Power in a Multipolar World",
    category: "politics",
    summary:
      "How rising regional powers and new alliances are reshaping global diplomacy.",
    content:
      "In the 21st century, power is spreading across more capitals than ever before. Instead of a single dominant superpower, regional blocs and medium-sized countries play a growing role in setting the global agenda...",
    publishedAt: "2025-01-01",
  },
  {
    slug: "global-supply-chains-after-crisis",
    title: "Global Supply Chains After Crisis",
    category: "economy",
    summary:
      "From just-in-time to just-in-case: how global trade is adapting.",
    content:
      "The disruptions of the early 2020s exposed how fragile complex supply chains can be. Governments and companies are now rethinking where they produce, store, and transport critical goods...",
    publishedAt: "2025-01-02",
  },
  {
    slug: "lessons-from-the-long-20th-century",
    title: "Lessons from the Long 20th Century",
    category: "history",
    summary:
      "Wars, recoveries, and institutions that still shape today’s world.",
    content:
      "From 1914 to the end of the Cold War, the world experienced unprecedented conflict and reconstruction. Many of the institutions created in that era continue to govern trade, security, and development today...",
    publishedAt: "2025-01-03",
  },
];

export function getArticles(): Article[] {
  return articles.sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
}

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((article) => article.slug === slug);
}

export function getArticlesByCategory(category: CategoryId): Article[] {
  return getArticles().filter((article) => article.category === category);
}
