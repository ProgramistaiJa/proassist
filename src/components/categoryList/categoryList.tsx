import { Category } from "../category/category";
import { CategoryItem } from "../category/category.types";
import styles from "./categoryList.module.scss";

type CategoryListProps = {
  categories: CategoryItem[];
};

export const CategoryList = ({ categories }: CategoryListProps) => {
  return (
    <div className={styles.container}>
      {categories.map((category) => (
        <Category key={category.id} category={category} />
      ))}
    </div>
  );
};
