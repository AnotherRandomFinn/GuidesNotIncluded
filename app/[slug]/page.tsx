import { allArticles } from "content-collections";

export const dynamicParams = false;

export async function generateStaticParams() {
  return allArticles.map((article) => ({
    slug: article.slug,
  }));
}

export default async function StaticPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = allArticles.find((article) => article.slug === slug)!;
  return <div>{article.content}</div>;
}
