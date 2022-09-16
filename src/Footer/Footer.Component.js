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
    <div className={clsx(className, "container__footer")}>
      <div className="container__columns--footer">
        <div className="column">
          <p>Asistencia</p>
          <Button className="container__button--column">Centro de ayuda</Button>
          <Button className="container__button--column">Aircover</Button>
          <Button className="container__button--column">
            Información de seguridad
          </Button>
          <Button className="container__button--column">
            Accesibilidad para todos
          </Button>
          <Button className="container__button--column">
            Opciones de cancelación
          </Button>
          <Button className="container__button--column">
            Nuestra respuesta ante la COVID-19
          </Button>
          <Button className="container__button--column">
            ¿Problemas en tu barrio?
          </Button>
        </div>
        <div className="column">
          <p>Comunidad</p>
          <Button className="container__button--column">
            Airbnb.org para emergencias
          </Button>
          <Button className="container__button--column">
            Ayuda a los refugiados afganos
          </Button>
          <Button className="container__button--column">
            Lucha contra la discriminación
          </Button>
        </div>
        <div className="column">
          <p>Cómo ser anfitrión</p>
          <Button className="container__button--column">Hazte anfitrión</Button>
          <Button className="container__button--column">
            AirCover para anfitriones
          </Button>
          <Button className="container__button--column">
            Recursos para anfitriones
          </Button>
          <Button className="container__button--column">
            Visita el foro de la comunidad
          </Button>
          <Button className="container__button--column">
            Ser un anfitrión responsable
          </Button>
        </div>
        <div className="column">
          <p>Acerca de</p>
          <Button className="container__button--column">Newsroom</Button>
          <Button className="container__button--column">
            Descubre las nuevas funciones
          </Button>
          <Button className="container__button--column">
            Carta de los fundadores
          </Button>
          <Button className="container__button--column">Empleo</Button>
          <Button className="container__button--column">Inversores</Button>
        </div>
      </div>

      <div className="container__info--footer">
        <div className="container__info--footerLeft">
          <img className="copyrightIcon" src={copyrightIcon} alt="img" />
          <p className="AirbnbInc">2022 Airbnb, Inc.</p>
          <img className="dot" src={dot} alt="dot" />
          <Button className="container__button--infoFooter">Privacidad</Button>
          <img className="dot" src={dot} alt="dot" />
          <Button className="container__button--infoFooter">Condiciones</Button>
          <img className="dot" src={dot} alt="dot" />
          <Button className="container__button--infoFooter">
            Mapa del sitio
          </Button>
          <img className="dot" src={dot} alt="dot" />
          <Button className="container__button--infoFooter">
            Datos de la empresa
          </Button>
        </div>
        <div className="container__info--footerRigth">
          <div className="footerRigth__container--Espanol">
            <button className="button__footerWorld">
              <img
                className="footerWorldIcon"
                src={footerWorldIcon}
                alt="img"
              ></img>
              <p className="spanishText">Español(ES)</p>
            </button>
          </div>
          <div className="footerRigth__container--Euro">
            <button className="euroButton">
              <img className="euroIcon" src={euroIcon} alt="img"></img>
              <p className="euroText"> EUR </p>
            </button>
          </div>
          <div className="footerRigth__container--Redes">
            <button className="facebookButton">
              <img className="facebookIcon" src={facebookIcon} alt="img"></img>
            </button>
            <button className="twitterButton">
              <img className="twitterIcon" src={twitterIcon} alt="img"></img>
            </button>
            <button className="instagramButton">
              <img
                className="instagramIcon"
                src={instagramIcon}
                alt="img"
              ></img>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default FooterCard;
