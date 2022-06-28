import { ThumbsUp, Trash } from "phosphor-react";
import React, { useState } from "react";
import Avatar from "../avatar/Avatar";
import styles from "./Comment.module.css";

export interface ICommentProps {
  content: string;
  onDeleteComment: (comment: string) => void;
}

export default function Comment({ content, onDeleteComment }: ICommentProps) {
  const [likeCount, setLikeCount] = useState(0)
  function handleDeleteComment() {
    onDeleteComment(content);
  }

  function handleLikeComment() {
    setLikeCount((state) => {
      return state + 1
    })
  }

  return (
    <div className={styles.comment}>
      <Avatar
        hasBorder={false}
        imageURL="https://github.com/maykbrito.png"
      ></Avatar>

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Mayk Brito</strong>
              <time 
                title="11 Mayo - 08:13h" 
                dateTime="2022-05-11 08:13:30"
              >
                Published one hour ago
              </time>
            </div>
            <button 
              onClick={handleDeleteComment} 
              title="Remove comment"
            >
              <Trash size={24}/>
            </button>
          </header>
          <p>{content}</p>
        </div>

        <footer className="">
          <button 
            type="button" 
            onClick={handleLikeComment}
          >
            <ThumbsUp />
            Like 
            <span>
              {likeCount}
            </span>
          </button>
        </footer>
      </div>
    </div>
  );
}
