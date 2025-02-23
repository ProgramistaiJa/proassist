import Image from "next/image";
import styles from "./post.module.scss";
import { Favorite } from "../favorite/favorite";
import { PostProps } from "./post.types";

export const PostContent: React.FC<PostProps> = ({ post }) => {
  const { id, title, lead, header, content, image } = post;
  return (
    <div className={styles.container}>
      <Favorite postId={id.toString()} />
      <h1>{title}</h1>
      <p className={styles.lead}>{lead}</p>
      <p className={styles.header}>{header}</p>
      <p className={styles.content}>{content}</p>
      <div className={styles.image}>
        <Image src={image} alt={title} fill />
      </div>
    </div>
  );
};
