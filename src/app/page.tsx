"use client";
import { Categories } from "@/components/categories/categories";
import styles from "./page.module.scss";
import { PostsList } from "@/components/postsList/postsList";
import type { Post } from "@/components/postsListItem/postsListItem.types";
import { use, useEffect, useState } from "react";
import { CategoryContext } from "@/helpers/categoryContext";
import { FavoriteContext } from "@/helpers/favoriteContext";
import type { FiltersType } from "@/components/filters/filters.types";
import { Filters } from "@/components/filters/filters";

export default function Home() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<Post[]>();
  const [show, setShow] = useState<"all" | "favorite">("all");

  const categoryContext = use(CategoryContext);
  if (!categoryContext) {
    throw new Error("Home must be used within a CategoryProvider");
  }
  const { selectedCategory, toggleCategory } = categoryContext;

  const favoriteContext = use(FavoriteContext);
  if (!favoriteContext) {
    throw new Error("Home must be used within a FavoriteProvider");
  }

  const { selectedFavorite: favoritePosts } = favoriteContext;

  useEffect(() => {
    const fetchPosts = async () => {
      const data = await fetch("http://localhost:5000/posts");
      const posts: Post[] = await data.json();
      setPosts(posts);
    };

    fetchPosts();
  }, []);

  useEffect(() => {
    console.log("useEffect 2 -> selected Category");
    if (selectedCategory === "" && show === "all") {
      setFilteredPosts(undefined);
      return;
    }
    if (selectedCategory === "" && show === "favorite") {
      setFilteredPosts(posts.filter((post) => favoritePosts.includes(post.id)));
      return;
    }
    if (selectedCategory !== "" && show === "favorite") {
      setFilteredPosts(
        posts
          .filter((post) => post.category === selectedCategory)
          .filter((post) => favoritePosts.includes(post.id))
      );
      return;
    }
    if (selectedCategory !== "" && show === "all") {
      setFilteredPosts(
        posts.filter((post) => post.category === selectedCategory)
      );
      return;
    }
    setFilteredPosts(undefined);
  }, [selectedCategory, favoritePosts, show]);

  const handleFilters = (filter: FiltersType) => {
    if (filter === "all") {
      setShow(filter);
    }
    if (filter === "favorite") {
      setShow(filter);
    }
    if (filter === "allCategory") {
      toggleCategory("");
    }
  };

  return (
    <main className={styles.main}>
      <Categories />
      <div className={styles.posts}>
        <Filters handleFilters={handleFilters} show={show} />
        <PostsList posts={filteredPosts || posts} />
      </div>
    </main>
  );
}
