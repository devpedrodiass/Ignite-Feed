import React, { FormEvent, useState } from "react";
import { format, formatDistanceToNow } from "date-fns";
import Avatar from "../avatar/Avatar";
import Comment from "../comment/Comment";

import styles from "./Post.module.css";
import enUS from "date-fns/locale/en-US";

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
  const [comments, setComments] = useState<string[]>(["Nice Post!!"]);
  const [newCommentText, setNewCommentText] = useState<string>("");
  const publishedDateFormatted = format(publishedAt, "dd LLLL '-' HH:mm'h'");

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: enUS,
    addSuffix: true,
  });

  function handleCreateNewComment(event: any) {
    event.preventDefault();

    setComments([...comments, newCommentText]);

    setNewCommentText("");
  }

  function handleNewCommentChange(event: any) {
    setNewCommentText(event?.target.value);
  }

  function deleteComment(commentToDelete: string) {
    const commentsWithoutDeletedOne = comments.filter(comment => {
      return comment !== commentToDelete
    })
    setComments(commentsWithoutDeletedOne)
  }

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
        <time
          title={publishedDateFormatted}
          dateTime={publishedAt.toISOString()}
        >
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {content.map((contentLine, index) => {
          if (contentLine.type === "paragraph") {
            return (
              <p key={`${contentLine.content}-${index}`}>
                {contentLine.content}
              </p>
            );
          } else {
            return (
              <p key={`${contentLine.content}-${index}`}>
                <a href="#">{contentLine.content}</a>
              </p>
            );
          }
        })}
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Give your feedback</strong>
        <textarea
          name="comment"
          placeholder="Type here..."
          value={newCommentText}
          onChange={(e) => handleNewCommentChange(e)}
        ></textarea>
        <footer>
          <button type="submit">Send</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map((comment, index) => (
          <Comment
            key={`${comment}-${index}`}
            content={comment}
            onDeleteComment={deleteComment}
          />
        ))}
      </div>
    </article>
  );
}
