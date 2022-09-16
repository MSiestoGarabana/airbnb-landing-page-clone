import isScrollUp from "./useScrollPosition";

export default function getClassName(prop) {
  let assignClassName = "";
  switch (prop) {
    case "nav":
      isScrollUp() === true
        ? (assignClassName = "header__nav")
        : (assignClassName = "header__nav--down");
      break;
    case "logo":
      isScrollUp() === true
        ? (assignClassName = "header__nav--logo")
        : (assignClassName = "header__nav--logoDown");
      break;
    case "midButtons":
      isScrollUp() === true
        ? (assignClassName = "header__nav--midButtons")
        : (assignClassName = "header__nav--midButtonsDown");
      break;
    case "rigthButtons":
      isScrollUp() === true
        ? (assignClassName = "header__nav--rigthButtons")
        : (assignClassName = "header__nav--rigthButtonsDown");
      break;
    default:
      console.log(
        "Have u passed a string to getClassName s function definition?"
      );
  }
  return assignClassName;
}
