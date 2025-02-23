import { Post } from "./postsListItem.types";
import styles from "./postsListItem.module.scss";
import Link from "next/link";
import { categoryColor, colorStyles } from "@/helpers/functions";
import Image from "next/image";

export const PostsListItem = ({ post }: { post: Post }) => {
  const categoryName = `${post.category.toUpperCase()}`;

  return (
    <div className={styles.item}>
      <p
        className={styles.category}
        style={{ color: colorStyles(categoryColor(post.category)) }}
      >
        {categoryName}
      </p>
      <h2 className={styles.title}>{post.title}</h2>
      <p className={styles.date}>{post.date}</p>
      <p className={styles.lead}>{post.lead}</p>

      <Link href={`/posts/${post.id}`} className={styles.link}>
        zobacz więcej
        <Image src="svg/arrow.svg" alt="arrow" width={24} height={24} />
      </Link>
    </div>
  );
};
