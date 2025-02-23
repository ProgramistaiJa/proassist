import { categories } from "@/helpers/categories";
import { CategoryList } from "../categoryList/categoryList";
import { CategoryTitle } from "../categoryTitle/categoryTitle";
import styles from "./categories.module.scss";

export const Categories = () => {
  return (
    <div className={styles.wrapper}>
      <CategoryTitle text="Kategorie" />
      <CategoryList categories={categories} />
    </div>
  );
};
