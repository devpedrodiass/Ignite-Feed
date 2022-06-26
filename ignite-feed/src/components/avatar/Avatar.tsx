import React from "react";

import styles from "./Avatar.module.css";

export interface IAvatarProps {
  imageURL: string;
  hasBorder?: boolean;
}

export default function Avatar({ imageURL, hasBorder = true }: IAvatarProps) {
  return (
    <img
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
      src={imageURL}
    />
  );
}
