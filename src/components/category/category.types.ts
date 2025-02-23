import { StaticImageData } from "next/image";

export type CategoryItem = {
  id: number;
  name: string;
  color: string;
  icon: { src: string; alt: string; width: number; height: number } | string;
  picture: string | StaticImageData;
};
