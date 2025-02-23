import { TitleProps } from "./categoryTitle.types";
import styles from "./categoryTitle.module.scss";

export const CategoryTitle = ({ text }: TitleProps) => {
  return <div className={styles.categoryTitle}>{text}</div>;
};
