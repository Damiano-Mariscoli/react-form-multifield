import PostCard from "../PostCard/PostCard";
import style from "./Main.module.css";
import { posts } from "../../posts.js";
import Tags from "../tags/Tags.jsx";
import { useState } from "react";
import Button from "../Button/Button.jsx";

export default function Main() {
  const [publishedPosts, setPublishedPosts] = useState(
    posts.filter((post) => post.published === true)
  );
  const tags = [];

  posts.forEach((post) => {
    const postTags = post.tags;

    postTags.forEach((tag) => {
      if (!tags.includes(tag)) {
        tags.push(tag);
      }
      // !tags.includes(tag) && tags.push(tag)
    });
  });

  const [formData, setFormData] = useState({
    title: "",
    content: "",
    image: "",
    tags: [],
  });
  function handleFormData(e) {
    console.log(formData);
    setFormData((formData) => ({
      ...formData,
      [e.target.name]: e.target.value,
    }));
  }
  function addPost(e) {
    e.preventDefault();

    const post = {
      id: Date.now(),
      title: formData.title,
      content: formData.content,
      tags: tags || [],
      published: true,
    };
    console.log(post);
    setPublishedPosts([...publishedPosts, post]);
    console.log(publishedPosts);
    console.log(formData);
  }

  function deletePost(id) {
    setPublishedPosts(publishedPosts.filter((post) => post.id !== id));
  }

  return (
    <main>
      <section className={style.section}>
        <div className="container">
          <form onSubmit={addPost} action="" className="inline-form">
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleFormData}
              placeholder="Titolo del post"
            />
            <input
              type="text"
              name="content"
              value={formData.content}
              onChange={handleFormData}
              placeholder="Contenuto del post"
            />

            <Button text="Salva" />
          </form>
        </div>
        <div className="container">
          <h1 className={style.section_title}>Il mio blog</h1>
        </div>
        <div className="container">
          <Tags className={style.tags_centered} tags={tags} />
        </div>
        <div className="container">
          <div className="row">
            {publishedPosts.map((el) => (
              <div key={el.id} className="col-4">
                <PostCard onDelete={() => deletePost(el.id)} post={el} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
