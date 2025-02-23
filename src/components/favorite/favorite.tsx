"use client";
import Image from "next/image";
import starIcon from "@/public/svg/star-icon.svg";
import styles from "./favorite.module.scss";
import { FavoriteContext } from "@/helpers/favoriteContext";
import { use } from "react";

export const Favorite = ({ postId }: { postId: string }) => {
  const context = use(FavoriteContext);
  if (!context) {
    throw new Error("Favorite must be used within a CategoryProvider");
  }
  const { selectedFavorite, toggleFavorite } = context;
  const isFavorite = selectedFavorite.includes(postId);
  return (
    <div className={styles.container}>
      <div
        className={styles.favorite}
        onClick={() => {
          toggleFavorite(postId);
        }}
      >
        <Image src={starIcon} alt="star" width={30} height={30} />
        {isFavorite ? (
          <span>usuń z ulubionych</span>
        ) : (
          <span>dodaj do ulubionych</span>
        )}
      </div>
    </div>
  );
};
