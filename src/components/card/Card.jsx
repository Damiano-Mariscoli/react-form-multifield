import style from "./card.module.css";

export default function Card({ id, title, content, tags, image }) {
  const imageUrl = image || `https://picsum.photos/1`;

  function renderTags() {
    return tags.map((tag) => {
      let tagClass;

      switch (tag) {
        case "html":
          tagClass = style.htmlColor;
          break;
        case "css":
          tagClass = style.cssColor;
          break;
        case "php":
          tagClass = style.phpColor;
          break;
        case "js":
          tagClass = style.jsColor;
          break;
      }

      return <span className={`${tagClass} ${style.tag}`}>{tag}</span>;
    });
  }

  return (
    <div className={style.card}>
      <img src={imageUrl} alt={title} />
      <div className={`${style.dFlex} ${style.flexColumn}`}>
        <h2>{title}</h2>
        <div className={style.dFlex}>{renderTags()}</div>
        <p>{content}</p>
        <button>LEGGI DI PIÙ</button>
      </div>
    </div>
  );
}
