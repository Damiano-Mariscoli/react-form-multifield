import style from "./Header.module.css";
export default function Header() {
  return (
    <>
      <div className={style.greyBar}></div>
      <div>
        <h1 className={`mt-5 ${style.textCenter}`}>Il mio blog</h1>
      </div>
    </>
  );
}
