"use client";
import React, { createContext, useState, ReactNode } from "react";

// Create the context with default values
const FavoriteContext = createContext<
  | {
      selectedFavorite: string[];
      toggleFavorite: (newFavorite: string) => void;
    }
  | undefined
>(undefined);

const FavoriteProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [selectedFavorite, setFavorite] = useState<string[]>([]);

  const addNewFavorite = (newFavorite: string) => {
    return selectedFavorite.filter((favorite) => favorite !== newFavorite);
  };

  const toggleFavorite = (newFavorite: string) => {
    console.log("toggleFavorite", newFavorite);
    setFavorite((prev) =>
      prev.includes(newFavorite)
        ? addNewFavorite(newFavorite)
        : [...prev, newFavorite]
    );
  };

  return (
    <FavoriteContext.Provider value={{ selectedFavorite, toggleFavorite }}>
      {children}
    </FavoriteContext.Provider>
  );
};

export { FavoriteContext, FavoriteProvider };
