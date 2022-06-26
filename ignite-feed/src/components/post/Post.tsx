import React from "react";
import Avatar from "../avatar/Avatar";
import Comment from "../comment/Comment";

import styles from "./Post.module.css";

export interface IPostProps {
  id?: string;
  author: {
    avatarURL: string;
    name: string;
    role: string;
  };
  publishedAt: Date;
  content: { type: "paragraph" | "link"; content: string }[];
}

export default function Post({ author, content, publishedAt }: IPostProps) {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar imageURL={author.avatarURL}></Avatar>
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time title="11 Mayo - 08:13h" dateTime="2022-05-11 08:13:30">
          Published one hour ago
        </time>
      </header>

      <div className={styles.content}>
        {content.map((contentLine) => {
          if (contentLine.type === "paragraph") {
            return <p>{contentLine.content}</p>;
          } else {
            return <a href="#">{contentLine.content}</a>;
          }
        })}
      </div>

      <form className={styles.commentForm}>
        <strong>Give your feedback</strong>
        <textarea placeholder="Type here..." name="" id=""></textarea>
        <footer>
          <button type="submit">Send</button>
        </footer>
      </form>
      <div className={styles.commentList}>
        <Comment></Comment>
        <Comment></Comment>
        <Comment></Comment>
      </div>
    </article>
  );
}
