import { ThumbsUp, Trash } from "phosphor-react";
import React from "react";
import Avatar from "../avatar/Avatar";
import styles from "./Comment.module.css";

export default function Comment() {
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
              <time title="11 Mayo - 08:13h" dateTime="2022-05-11 08:13:30">
                Published one hour ago
              </time>
            </div>
            <button title="Remove comment">
              <Trash size={24}></Trash>
            </button>
          </header>
          <p>Very good Pedro!, Congrats 🤩</p>
        </div>
        <footer className="">
          <button>
            <ThumbsUp></ThumbsUp>
            Like <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
