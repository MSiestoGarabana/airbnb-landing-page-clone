import Button from "../Button/Button.Component";
import clsx from "clsx";
import backgroundImage from "../Images/IMGBusquedaFlexible.jpg";
import "./BúsquedaFlexible.Component.css";

function BusquedaFlexible({ className }) {
  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
      className={clsx(className, "component__busquedaFlexible")}
    >
      <p className="busquedaFlexible__text">Déjate guiar por la curiosidad</p>
      <Button className="busquedaFlexible__button">
        <p className="busquedaFlexible__button--text">Búsqueda Flexible</p>
      </Button>
    </div>
  );
}
export default BusquedaFlexible;
