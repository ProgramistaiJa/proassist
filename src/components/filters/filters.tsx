import { FiltersProps } from "./filters.types";
import styles from "./filters.module.scss";
import { use, useEffect, useState } from "react";
import { CategoryContext } from "@/helpers/categoryContext";
import Image from "next/image";
import deleteIcon from "@/public/svg/delete-icon.svg";

export const Filters: React.FC<FiltersProps> = ({ handleFilters, show }) => {
  const [showCategory, setShowCategory] = useState("");
  const categoryContext = use(CategoryContext);
  if (!categoryContext) {
    throw new Error("Filters must be used within a CategoryProvider");
  }
  const { selectedCategory } = categoryContext;
  useEffect(() => {
    setShowCategory(selectedCategory);
  }, [selectedCategory]);

  const activeFilter = {
    color: "#8E2F3F",
    textDecoration: "underline",
    fontFamily: "Poppins",
    fontWeight: 700,
    fontSize: "14px",
    lineHeight: "21px",
    letterSpacing: "0px",
    textDecorationStyle: "solid" as const,
    textUnderlineOffset: "25%",
    textDecorationThickness: "20%",
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.containerOne}>
        <div className={styles.title}>Wpisy</div>
        {showCategory && (
          <div
            className={styles.category}
            onClick={() => {
              handleFilters("allCategory");
            }}
          >
            {selectedCategory.toUpperCase()}
            <Image src={deleteIcon} alt={"delete"} />
          </div>
        )}
      </div>
      <div className={styles.containerTwo}>
        <div className={styles.filters}>
          <div
            className={styles.item}
            onClick={() => {
              handleFilters("all");
            }}
            style={show === "all" ? activeFilter : {}}
          >
            WSZYSTKIE
          </div>
          <span>/</span>
          <div
            onClick={() => {
              handleFilters("favorite");
            }}
            style={show === "favorite" ? activeFilter : {}}
          >
            ULUBIONE
          </div>
        </div>
        <div id="sort" className={styles.sort}>
          <div>pokaż od:</div> <div>▼</div>
        </div>
      </div>
    </div>
  );
};
