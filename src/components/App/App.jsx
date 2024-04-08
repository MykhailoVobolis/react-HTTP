import { useState, useEffect } from "react";
import axios from "axios";
import ArticleList from "../ArticleList/ArticleList";
import "./App.css";
import Loader from "../Loader/Loader";

export default function App() {
  // Оголошуємо стани
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  let [color, setColor] = useState("#ffffff");

  useEffect(() => {
    // Оголошуємо асинхронну функцію
    async function fetchArticles() {
      try {
        //  Встановлюємо індикатор в true перед запитом
        setLoading(true);
        setColor("#d83338");
        // Виконуємо HTTP-запит
        const response = await axios.get("https://hn.algolia.com/api/v1/search?query=react");
        // Записуємо дані в стан
        setArticles(response.data.hits);
      } catch (error) {
        // Тут будемо обробляти помилку
      } finally {
        // Встановлюємо індикатор в false після запиту
        setLoading(false);
        setColor("#ffffff");
      }
    }
    // Викликаємо асинхронну функцію одразу після оголошення
    fetchArticles();
  }, []);

  return (
    <div>
      <h1>Latest articles</h1>
      {articles.length > 0 && <ArticleList items={articles} />}
      <Loader color={color} loading={loading} />
    </div>
  );
}
