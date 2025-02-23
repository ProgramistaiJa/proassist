import image1 from "@/public/img/old-books.png";
import image2 from "@/public/img/people.png";
import image3 from "@/public/img/inspiration.png";
import image4 from "@/public/img/old-town.png";

import { CategoryItem } from "@/components/category/category.types";

export const categories: CategoryItem[] = [
  {
    id: 1,
    name: "wiedza",
    color: "blue",
    icon: { src: "svg/book-icon.svg", alt: "book icon", width: 50, height: 50 },
    picture: image1,
  },
  {
    id: 2,
    name: "inspiracje",
    color: "yellow",
    icon: {
      src: "svg/head-flower-icon.svg",
      alt: "head flower icon",
      width: 50,
      height: 50,
    },
    picture: image2,
  },
  {
    id: 3,
    name: "interpretacje",
    color: "red",
    icon: {
      src: "svg/inspiration-icon.svg",
      alt: "inspiration icon",
      width: 50,
      height: 50,
    },
    picture: image3,
  },
  {
    id: 4,
    name: "dostępne",
    color: "green",
    icon: {
      src: "svg/glasses-icon.svg",
      alt: "glasses icon",
      width: 50,
      height: 50,
    },
    picture: image4,
  },
];
