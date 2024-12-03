import { useState } from "react";
import Card from "../card/card.jsx";

function Form() {
  const [newTitles, setTitles] = useState([]);
  const [newTitle, setNewTitle] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    if (newTitle.trim() !== "") {
      setTitles((prevTitles) => [...prevTitles, newTitle]);
      setNewTitle("");
    }
  }

  return (
    <>
      <h2 className="text-center mb-3">Aggiungi un titolo:</h2>
      <form onSubmit={handleSubmit} className="d-flex justify-content-center">
        <input
          type="text"
          value={newTitle}
          onChange={(e) => {
            setNewTitle(e.target.value);
          }}
        />
        <button className="btn btn-dark" type="submit">
          Add
        </button>
        <p>il titolo è: {newTitle}</p>
        {console.log({ newTitle }, { newTitles })}
      </form>
      <div className="container">
        <div className="row justify-content-center">
          {newTitles.map((title, i) => (
            <Card key={i} title={title} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Form;
