"use client";
import React, { createContext, useState, ReactNode } from "react";

// Create the context with default values
const CategoryContext = createContext<
  | { selectedCategory: string; toggleCategory: (newCategory: string) => void }
  | undefined
>(undefined);

const CategoryProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [selectedCategory, setCategory] = useState("");

  const toggleCategory = (newCategory: string) => {
    setCategory((prev) => (prev !== newCategory ? newCategory : prev));
  };

  return (
    <CategoryContext.Provider value={{ selectedCategory, toggleCategory }}>
      {children}
    </CategoryContext.Provider>
  );
};

export { CategoryContext, CategoryProvider };
