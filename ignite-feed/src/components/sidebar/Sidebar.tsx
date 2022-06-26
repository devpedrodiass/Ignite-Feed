import React from "react";

import { PencilLine } from "phosphor-react";

import styles from "./Sidebar.module.css";

import background from "../../assets/background.png";
import Avatar from "../avatar/Avatar";

function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img className={styles.cover} src={background} alt="" />

      <div className={styles.profile}>
        <Avatar imageURL="https://github.com/fariapv.png"></Avatar>

        <strong>Pedro Dias</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={18}></PencilLine> Edit your profile
        </a>
      </footer>
    </aside>
  );
}

export default Sidebar;
