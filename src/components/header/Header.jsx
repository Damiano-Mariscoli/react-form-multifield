import style from "./Header.module.css";
export default function Header() {
  return (
    <>
      <div className={style.greyBar}></div>
      <div>
        <h1 className={style.textCenter}>Il mio blog</h1>
      </div>
    </>
  );
}
