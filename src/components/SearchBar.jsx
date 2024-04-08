// Live input
export default function SearchBar({ value, onInput }) {
  const handleChange = (evt) => {
    onInput(evt.target.value);
  };

  return (
    <div>
      <hr />
      <h2>Live input</h2>
      <input type="text" value={value} onChange={handleChange} />
      <p>{value}</p>
    </div>
  );
}
