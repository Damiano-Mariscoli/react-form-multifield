import PostCard from "../PostCard/PostCard";
import style from "./Main.module.css";
import { posts } from "../../posts.js";
import Tags from "../tags/Tags.jsx";
import { useState } from "react";
import Button from "../Button/Button.jsx";

const formDataInit = {
  title: "",
  content: "",
  image: "",
  test: "",
  published: null,
  tags: [],
};

export default function Main() {
  const [publishedPosts, setPublishedPosts] = useState(posts);
  const tags = [];

  posts.forEach((post) => {
    <div className="container">
      <div className="row">
        {publishedPosts.map(
          (el) =>
            el.published ? ( // Controlla se il post è pubblicato
              <div key={el.id} className="col-4">
                <PostCard onDelete={() => deletePost(el.id)} post={el} />
              </div>
            ) : null // Se il post non è pubblicato, non restituisce nulla
        )}
      </div>
    </div>;
    const postTags = post.tags;

    postTags.forEach((tag) => {
      if (!tags.includes(tag)) {
        tags.push(tag);
      }
      // !tags.includes(tag) && tags.push(tag)
    });
  });

  const [formData, setFormData] = useState(formDataInit);
  function handleFormData(e) {
    console.log(formData, [e.target.name, e.target.value]);
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
      tags: [formData.tags],
      image: formData.image,
      published: formData.published,
    };
    console.log(post);

    setPublishedPosts([...publishedPosts, post]);
    setFormData(formDataInit);
    console.log(publishedPosts);
    console.log(formData);
  }

  function deletePost(id) {
    setPublishedPosts(publishedPosts.filter((post) => post.id !== id));
  }

  return (
    <main>
      <pre>{JSON.stringify(formData)}</pre>
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
            <input
              type="text"
              name="image"
              value={formData.image}
              onChange={handleFormData}
              placeholder="URL del post"
            />
            <label htmlFor="avaiable">
              <select onChange={handleFormData} name="published" id="">
                <option value=""></option>
                <option value={true}>Published</option>
                <option value={false}>Not published</option>
              </select>
            </label>
            <ul>
              <li>
                <label htmlFor="tag-html">
                  <input
                    name="tags"
                    type="checkbox"
                    id="tag-html"
                    value="HTML"
                    onChange={handleFormData}
                  />
                  HTML
                </label>
              </li>
              <li>
                <label htmlFor="tag-css">
                  <input
                    name="tags"
                    type="checkbox"
                    id="tag-css"
                    value="CSS"
                    onChange={handleFormData}
                  />
                  CSS
                </label>
              </li>
              <li>
                <label htmlFor="tag-php">
                  <input
                    name="tags"
                    type="checkbox"
                    id="tag-php"
                    value="PHP"
                    onChange={handleFormData}
                  />
                  PHP
                </label>
              </li>
              <li></li>
            </ul>
            <label htmlFor="tag-js">
              <input
                name="tags"
                type="checkbox"
                id="tag-js"
                value="JavaScript"
                onChange={handleFormData}
              />
              JavaScript
            </label>

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
            {publishedPosts.map((el) => {
              console.log(el.published);
              // Controlla se il post è pubblicato
              if (el.published === true) {
                return (
                  <div key={el.id} className="col-4">
                    <PostCard onDelete={() => deletePost(el.id)} post={el} />
                  </div>
                );
              }
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
