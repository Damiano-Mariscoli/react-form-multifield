import style from "./Hero.module.css";
import Card from "../card/card.jsx";
import { posts } from "../../assets/posts.js";
export default function Main() {
  return (
    <>
      <div className={`${style.dFlex}  ${style.flexCenter}`}>
        <div className={style.containerMd}>
          <div className={`${style.row} ${style.flexCenter}`}>
            {posts.map((post) =>
              post.published ? (
                <>
                  <div className={style.col6}>
                    <Card
                      image={post.image}
                      title={post.title}
                      tags={post.tags}
                      content={post.content}
                    />
                  </div>
                </>
              ) : (
                <></>
              )
            )}
          </div>
        </div>
      </div>
    </>
  );
}
