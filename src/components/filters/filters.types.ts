export type FiltersType = "all" | "favorite" | "allCategory";

export type FiltersProps = {
  handleFilters: (filter: FiltersType) => void;
  show: FiltersType;
};
