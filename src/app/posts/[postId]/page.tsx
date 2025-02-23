import { PostContent } from "@/components/post/post";
import type { Post } from "@/components/postsListItem/postsListItem.types";

export default async function PostPage({
  params,
}: {
  params: Promise<{ postId: string }>;
}) {
  const { postId } = await params;

  const data = await fetch("http://localhost:5000/posts");
  const posts: Post[] = await data.json();

  const post = posts.find((post) => post.id === postId);

  if (!post) {
    return <h1>No posts to show.</h1>;
    // notFound(); // alternative metod; function within a route segment and use the not-found file to show a 404 UI.
  }

  return (
    <div>
      <PostContent post={post} />
    </div>
  );
}
