//Радіо-кнопки
export default function CoffeeSel({ value, onSelect }) {
  const handleSizeChange = (evt) => {
    onSelect(evt.target.value);
  };

  return (
    <>
      <hr />
      <h2>Select coffee size: {value}</h2>
      <label>
        <input type="radio" name="coffeeSize" value="sm" checked={value === "sm"} onChange={handleSizeChange} />
        Small
      </label>
      <label>
        <input type="radio" name="coffeeSize" value="md" checked={value === "md"} onChange={handleSizeChange} />
        Meduim
      </label>
      <label>
        <input type="radio" name="coffeeSize" value="lg" checked={value === "lg"} onChange={handleSizeChange} />
        Large
      </label>
    </>
  );
}
