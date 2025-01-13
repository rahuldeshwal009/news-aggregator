import { NewsArticle } from "../../interface";
import Article from "../Article";

const ArticleList = ({ articles = [], isMobile }: { articles: NewsArticle[], isMobile: boolean }) => {
  if (articles.length === 0) {
    return (
        <p>No articles found</p>
    );
  }

  return (
    <div className={`articles ${isMobile ? "mobile" : ""}`}>
      {articles.map((article: NewsArticle, index) => (
          <Article key={index} article={article} />
        ))}
    </div>
  );
};

export default ArticleList;
