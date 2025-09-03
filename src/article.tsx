import { allArticles } from "content-collections";

interface ArticleProps {
  slug: string;
}

export default function Article({ slug }: ArticleProps) {
  const article = allArticles.find((article) => article.slug === slug);

  if (!article) {
    return <div>Article not found</div>;
  }

  return <div>{article.body}</div>;
}
