import isScrollUp from "./useScrollPosition";

export default function getClassName(prop) {
  let assignClassName = "";
  switch (prop) {
    case "nav":
      isScrollUp() === true
        ? (assignClassName = "navcomponent")
        : (assignClassName = "navcomponentdown");
      break;
    case "logo":
      isScrollUp() === true
        ? (assignClassName = "navcomponent__logo")
        : (assignClassName = "navcomponent__logodown");
      break;
    case "midButtons":
      isScrollUp() === true
        ? (assignClassName = "navcomponent__midbuttons")
        : (assignClassName = "navcomponent__midbuttonsdown");
      break;
    case "rigthButtons":
      isScrollUp() === true
        ? (assignClassName = "navcomponent__rigthbuttons")
        : (assignClassName = "navcomponent__rigthbuttonsdown");
      break;
    default:
      console.log(
        "Have u passed a string to getClassName s function definition?"
      );
  }
  return assignClassName;
}
