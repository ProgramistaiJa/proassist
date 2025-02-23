import Image from "next/image";
import { CategoryItem } from "./category.types";

import styles from "./category.module.scss";
import { colorStyles } from "@/helpers/functions";
import { use } from "react";
import { CategoryContext } from "@/helpers/categoryContext";

export const Category = ({ category }: { category: CategoryItem }) => {
  const context = use(CategoryContext);
  if (!context) {
    throw new Error("Category must be used within a CategoryProvider");
  }
  const { selectedCategory, toggleCategory } = context;

  const color = `${category.color}`;
  const categoryName = `${category.name.toUpperCase()}`;

  const isSelected = selectedCategory === category.name;

  const selectedStyle = {
    border: "6px solid #A02E41",
    backgroundColor: colorStyles(color),
  };
  const style = { backgroundColor: colorStyles(color) };
  //TODO: Fix image behavior with border

  return (
    <div
      className={styles.category}
      style={isSelected ? selectedStyle : style}
      onClick={() => toggleCategory(category.name)}
    >
      <Image src={category.picture} alt={category.name} />
      <div className={styles.content}>
        <h2 className={styles.name}>{categoryName}</h2>

        {typeof category.icon === "object" && category.icon !== null && (
          <Image
            src={category.icon.src}
            alt={category.icon.alt}
            width={category.icon.width}
            height={category.icon.height}
          />
        )}
      </div>
    </div>
  );
};
