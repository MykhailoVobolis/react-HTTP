import ArticleList from "../ArticleList/ArticleList";
import { useState, useEffect } from "react";
import axios from "axios";

import "./App.css";

export default function App() {
  // 1. Оголошуємо стан
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    // 2. Оголошуємо асинхронну функцію
    async function fetchArticles() {
      // 3. Виконуємо HTTP-запит
      const response = await axios.get("https://hn.algolia.com/api/v1/search?query=react");
      // 4. Записуємо дані в стан
      setArticles(response.data.hits);
    }
    // 5. Викликаємо асинхронну функцію одразу після оголошення
    fetchArticles();
  }, []);

  return (
    <div>
      <h1>Latest articles</h1>
      {articles.length > 0 && <ArticleList items={articles} />}
    </div>
  );
}
