import { useState, useEffect } from "react";
import ArticleList from "../ArticleList/ArticleList";
import Loader from "../Loader/Loader";
import Error from "../Error/Error";
import SearchForm from "../SearchForm/SearchForm";
import { fetchArticlesWithTopic } from "../../articles-api";
import "./App.css";

export default function App() {
  // Оголошуємо стани
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    // Оголошуємо асинхронну функцію
    async function fetchArticles() {
      try {
        //  Встановлюємо індикатор в true перед запитом
        setLoading(true);

        // Використовуємо HTTP-функцію
        const data = await fetchArticlesWithTopic("react");
        // Записуємо дані в стан
        setArticles(data);
      } catch (error) {
        // Тут обробляємо помилку
        // Встановлюємо стан error в true
        setError(true);
      } finally {
        // Встановлюємо індикатор в false після запиту
        setLoading(false);
      }
    }
    // Викликаємо асинхронну функцію одразу після оголошення
    fetchArticles();
  }, []);

  return (
    <div>
      <h1>Latest articles</h1>
      <SearchForm />
      {error && <Error error={error} />}
      {articles.length > 0 && <ArticleList items={articles} />}
      <Loader loading={loading} />
    </div>
  );
}
