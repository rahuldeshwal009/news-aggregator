import { NewsArticle } from "../../interface";

const Article = ({ article }: { article: NewsArticle }) => {
  return (
    <div className="article">
      <h2>{article.title}</h2>
      <p>{article.description}</p>
      <a href={article.url} target="_blank" rel="noopener noreferrer">
        Read More
      </a>
    </div>
  );
};

export default Article;
