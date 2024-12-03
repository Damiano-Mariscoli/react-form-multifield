import style from "./card.module.css";

export default function Card({ title }) {
  return (
    <div className={style.card}>
      <img src="https://dummyimage.com/600x400/000/fff" alt="" />

      <div className={``}>
        <h2 className="mt-2">{title ? title : "Titolo del post"}</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam tenetur
          aspernatur dolores doloribus nostrum, repudiandae tempore quis aliquid
          id velit possimus adipisci deleniti molestiae temporibus inventore
          odio
        </p>
        <button>LEGGI DI PIÙ</button>
      </div>
    </div>
  );
}
