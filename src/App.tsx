import { useState, useEffect, useCallback } from "react";
import { useMediaQuery } from "react-responsive";

import { fetchArticles } from "./apis/fetchArticles";
import SearchBar from "./components/SearchBar";
import ArticleList from "./components/ArticleList";
import { NewsArticle } from "./interface";
import "./App.css";

const App = () => {
  const [articles, setArticles] = useState<NewsArticle[]>([]);
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("");
  const [source, setSource] = useState("");
  const [date, setDate] = useState("");

  const isMobile = useMediaQuery({ maxWidth: 768 });

  useEffect(() => {
    const fetchFilteredArticles = async () => {
      const { articles } = (await fetchArticles(
        query,
        source,
        category,
        date
      )) as { articles: NewsArticle[] };
      setArticles(articles);
    };
    fetchFilteredArticles();
  }, [query, source, category, date]);

  const handleSearch = useCallback(
    (query: string, source: string, category: string, date: string) => {
      setQuery(query);
      setSource(source);
      setCategory(category);
      setDate(date);
    },
    []
  );

  return (
    <div className="App">
      <header className="App-header">
        <h1>News Aggregator</h1>
        <SearchBar onSearch={handleSearch}
        />
      </header>

      <main className="news-list">
        <ArticleList articles={articles} isMobile={isMobile} />
      </main>
    </div>
  );
};

export default App;
