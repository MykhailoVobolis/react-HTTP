import LoginForm from "./LoginForm";
import SearchBar from "./SearchBar";
import LangSwitcher from "./LangSwitcher";
import CoffeeSel from "./CoffeeSel";
import TermsUse from "./TermsUse";
import FeedbackForm from "./FeedbackForm";
import { useState } from "react";

export default function App() {
  // Колбек-функція для обробки сабміту форми
  const handleLogin = (userData) => {
    // Виконуємо необхідні операції з даними
    console.log(userData);
  };

  const [lang, setLang] = useState("uk");
  const [inputValue, setInputValue] = useState("");
  const [coffeeSize, setCoffeeSize] = useState("sm");
  const [hasAccepted, setHasAccepted] = useState(false);

  return (
    <div>
      <h1>Examples of forms in React</h1>
      {/* Передаємо колбек як пропс форми */}
      <LoginForm onLogin={handleLogin} />
      <SearchBar value={inputValue} onInput={setInputValue} />
      <>
        <hr />
        <h2>Selected language: {lang} </h2>
        <LangSwitcher value={lang} onSelect={setLang} />
      </>
      <CoffeeSel value={coffeeSize} onSelect={setCoffeeSize} />
      <TermsUse value={hasAccepted} onSelect={setHasAccepted} />
      <FeedbackForm />
    </div>
  );
}
