import { dummyData } from "./dummyData";

export const fetchArticles = async (
  query: string,
  source: string,
  category: string,
  date: string
) => {
  // Simulating a fake response using mock data
  return new Promise((resolve) => {
    setTimeout(() => {
      // Filtering articles based on query, source, category, and date
      const filteredArticles = dummyData.articles.filter((article) => {
        const queryMatch =
          !query ||
          article.title.toLowerCase().includes(query.toLowerCase()) ||
          article.description.toLowerCase().includes(query.toLowerCase());
        const sourceMatch =
          !source || article.source.id.toLowerCase() === source.toLowerCase();
        const categoryMatch =
          !category ||
          article.category.toLowerCase() === category.toLowerCase();
        const dateMatch = !date || article.publishedAt.startsWith(date);

        return queryMatch && sourceMatch && categoryMatch && dateMatch;
      });

      resolve({ articles: filteredArticles });
    }, 100); // Simulating a delay
  });
};
