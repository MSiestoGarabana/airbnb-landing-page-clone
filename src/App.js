import React from "react";

import Header from "./Header/Header.Component";
import TarjetaActualización from "./TarjetaActualizacion/TarjetaActualización.Component";
import BusquedaFlexible from "./BusquedaFlexible/BúsquedaFlexible.Component";
import ProximosViajes from "./InspiracionProximo/InspiraciónPróximo.Component";
import DescubreExperiencias from "./DescubreExperiencias/DescubreExperiencias.Component";
import TarjetaRegalo from "./TarjetaRegalo/TarjetaRegalo.Component";
import Hospedar from "./Hospedar/Hospedar.Component";
import InspiraciónFuturo from "./InspiracionFuturo/InspiracionFuturo.Component";
import FooterCard from "./Footer/Footer.Component";
import "./fonts/fonts.css";
import "./App.css";

function App() {
  return (
    <div
      className="App__container"
      style={{
        fontFamily: "Black", //"Medium",
      }}
    >
      <Header className="App__header" />
      <div className="background__black"></div>
      <main className="App__main">
        <TarjetaActualización className="App__tarjetaActualizacion" />
        <BusquedaFlexible className="App__busquedaFlexible" />
        <ProximosViajes className="App__proximosViajes" />
        <DescubreExperiencias className="App__descubreExperiencias" />
        <TarjetaRegalo className="App__tarjetaRegalo" />
        <Hospedar className="App__hospedar" />
        <InspiraciónFuturo className="App__inspiracionFuturo" />
      </main>
      <FooterCard className="App__footer" />
    </div>
  );
}

export default App;
