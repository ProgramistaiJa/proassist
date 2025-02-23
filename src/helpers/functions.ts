import variables from "@/styles/variables.module.scss";

export const colorStyles = (color: string) => {
  if (color === "blue") {
    return variables.blue;
  }
  if (color === "yellow") {
    return variables.yellow;
  }
  if (color === "red") {
    return variables.red;
  }
  if (color === "green") {
    return variables.green;
  }
};

export const categoryColor = (category: string) => {
  if (category === "wiedza") {
    return "blue";
  }
  if (category === "inspiracje") {
    return "yellow";
  }
  if (category === "interpretacje") {
    return "red";
  }
  if (category === "dostępne") {
    return "green";
  }
  return "defaultColor";
};
