type Article = {
  id: number,
  name: string,
  text: string
};
type ArticleWithoutText = Omit<Article, 'text'>;
type ArticlesById = Record<number, Article> | null;
type ArticleList = ArticleWithoutText[];

export type { Article, ArticleWithoutText, ArticleList, ArticlesById };