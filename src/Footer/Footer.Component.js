import React from "react";
import Button from "../Button/Button.Component";
import clsx from "clsx";
import "./Footer.Component.css";

import dot from "../Logos/dot.png";
import copyrightIcon from "../Logos/copyright__logo.png";
import footerWorldIcon from "../Logos/worldIcon__footer.png";
import euroIcon from "../Logos/euro__logo.png";
import facebookIcon from "../Logos/facebook__logo.png";
import twitterIcon from "../Logos/twitter__logo.png";
import instagramIcon from "../Logos/instagram__logo.png";

function FooterCard({ className }) {
  return (
    <div className={clsx(className, "Footer")}>
      <div className="Footer__ColumnsContainer">
        <div className="Footer__Column">
          <p>Asistencia</p>
          <Button className="Footer__Button--ColumnButton">
            Centro de ayuda
          </Button>
          <Button className="Footer__Button--ColumnButton">Aircover</Button>
          <Button className="Footer__Button--ColumnButton">
            Información de seguridad
          </Button>
          <Button className="Footer__Button--ColumnButton">
            Accesibilidad para todos
          </Button>
          <Button className="Footer__Button--ColumnButton">
            Opciones de cancelación
          </Button>
          <Button className="Footer__Button--ColumnButton">
            Nuestra respuesta ante la COVID-19
          </Button>
          <Button className="Footer__Button--ColumnButton">
            ¿Problemas en tu barrio?
          </Button>
        </div>
        <div className="Footer__Column">
          <p>Comunidad</p>
          <Button className="Footer__Button--ColumnButton">
            Airbnb.org para emergencias
          </Button>
          <Button className="Footer__Button--ColumnButton">
            Ayuda a los refugiados afganos
          </Button>
          <Button className="Footer__Button--ColumnButton">
            Lucha contra la discriminación
          </Button>
        </div>
        <div className="Footer__Column">
          <p>Cómo ser anfitrión</p>
          <Button className="Footer__Button--ColumnButton">
            Hazte anfitrión
          </Button>
          <Button className="Footer__Button--ColumnButton">
            AirCover para anfitriones
          </Button>
          <Button className="Footer__Button--ColumnButton">
            Recursos para anfitriones
          </Button>
          <Button className="Footer__Button--ColumnButton">
            Visita el foro de la comunidad
          </Button>
          <Button className="Footer__Button--ColumnButton">
            Ser un anfitrión responsable
          </Button>
        </div>
        <div className="Footer__Column">
          <p>Acerca de</p>
          <Button className="Footer__Button--ColumnButton">Newsroom</Button>
          <Button className="Footer__Button--ColumnButton">
            Descubre las nuevas funciones
          </Button>
          <Button className="Footer__Button--ColumnButton">
            Carta de los fundadores
          </Button>
          <Button className="Footer__Button--ColumnButton">Empleo</Button>
          <Button className="Footer__Button--ColumnButton">Inversores</Button>
        </div>
      </div>

      <div className="Footer__BottomStrap">
        <div className="Footer__BottomStrap-Left">
          <img
            className="Footer__copyrightIcon"
            src={copyrightIcon}
            alt="img"
          />
          <p className="Footer__AirbnbInc">2022 Airbnb, Inc.</p>
          <img className="Footer__dot" src={dot} alt="dot" />
          <Button className="Footer__Button--BottomStrap">Privacidad</Button>
          <img className="Footer__dot" src={dot} alt="dot" />
          <Button className="Footer__Button--BottomStrap">Condiciones</Button>
          <img className="Footer__dot" src={dot} alt="dot" />
          <Button className="Footer__Button--BottomStrap">
            Mapa del sitio
          </Button>
          <img className="Footer__dot" src={dot} alt="dot" />
          <Button className="Footer__Button--BottomStrap">
            Datos de la empresa
          </Button>
        </div>
        <div className="Footer__BottomStrap-Rigth">
          <button className="Footer__WorldEspañolButton">
            <img
              className="Footer__WorldIconImg"
              src={footerWorldIcon}
              alt="img"
            ></img>
            <p className="Footer__SpanishText">Español(ES)</p>
          </button>

          <button className="Footer__euroButton">
            <img className="Footer__euroIcon" src={euroIcon} alt="img"></img>
            <p className="Footer__euroText"> EUR </p>
          </button>

          <button className="Footer__facebookButton">
            <img
              className="Footer__facebookImg"
              src={facebookIcon}
              alt="img"
            ></img>
          </button>
          <button className="Footer__twitterButton">
            <img
              className="Footer__twitterImg"
              src={twitterIcon}
              alt="img"
            ></img>
          </button>
          <button className="Footer__instagramButton">
            <img
              className="Footer__instagramImg"
              src={instagramIcon}
              alt="img"
            ></img>
          </button>
        </div>
      </div>
    </div>
  );
}
export default FooterCard;
