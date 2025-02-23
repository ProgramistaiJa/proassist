import Link from "next/link";

export default function Posts() {
  return (
    <div>
      <h1>Posts</h1>

      <div>
        <Link href="/posts/1">Post 1</Link>
      </div>
      <div>
        <Link href="/posts/2">Post 2</Link>
      </div>
      <div>
        <Link href="/posts/3">Post 3</Link>
      </div>
    </div>
  );
}
