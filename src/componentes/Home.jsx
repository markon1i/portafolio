import React from "react";
import "./Home.css";
import OverlayTrigger from "react-bootstrap/esm/OverlayTrigger";
import Tooltip from "react-bootstrap/esm/Tooltip";
import { Link, animateScroll as scroll } from "react-scroll";
import img from "./Sin título.jpg";
import cv from "./CV_MARKO.pdf";
import dog from "./DOGS.png";
import gym from "./gym.png";

export default function Home() {
  return (
    <div className="home">
      <nav className="nav-conteiner">
        <Link
          className="boton"
          to="section1"
          spy={true}
          smooth={true}
          duration={300}
          offset={-70}
          style={{ padding: "0 20px" }}
        >
          Inicio
          {/* <button className="boton">Inicio</button> */}
        </Link>
        <Link
          className="boton"
          to="section2"
          spy={true}
          smooth={true}
          duration={300}
          offset={-70}
          style={{ padding: "0 20px" }}
        >
          {/* <button className="boton">Proyectos</button> */}
          Proyectos
        </Link>
        <Link
          className="boton"
          to="section3"
          spy={true}
          smooth={true}
          duration={300}
          offset={-70}
          style={{ padding: "0 20px" }}
        >
          {/* <button className="boton">Tecnologías</button> */}
          Tecnologías
        </Link>
        <Link
          className="boton"
          to="section4"
          spy={true}
          smooth={true}
          duration={300}
          offset={-70}
          style={{ padding: "0 20px" }}
        >
          {/* <button className="boton">Contáctame</button> */}
          Contáctame
        </Link>
        <div className="cv">
          <a
            className="cv"
            href={cv}
            download
            style={{
              cursor: "pointer",
              textDecoration: "none",
              textDecorationColor: "none",
            }}
          >
            {" "}
            Descargar curriculum
          </a>
        </div>
      </nav>
      <div className="todo">
        <div className="contenedorPresentacion">
          <div id="section1" className="presentacion">
            <div className="nombre">
              <div className="img-name">
                <img
                  src={img}
                  alt="imagen perfil"
                  style={{ borderRadius: "50%" }}
                />
              </div>
              <div className="titulos">
                <h3 className="titulo">Hola soy </h3>
                <h2 className="tituloNombre" id="marko">
                  MARKO SCHNEIDER
                </h2>
                <h3 className="subtitulo">
                  Desarrollador Full Stack Web Developers
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div className="contenedorinfo">
          <p className="texto">
            <h3 className="quiensoy" style={{ marginBottom: "25px" }}>
              Quién soy?
            </h3>
            <p className="texto">
              🔹Me considero una persona muy entusiasta a la hora de trabajar,
              soy muy sociable, me gusta trabajar en equipo y aprender de los
              demás.
            </p>
            <br />
            <h3 className="quiensoy" style={{ marginBottom: "25px" }}>
              Porque yo?
            </h3>
            <p className="texto">
              🔸Más allá de los conocimientos técnicos, me gusta estar en
              constante aprendizaje, aprendo muy rapido, me gusta trabajar en
              equipo y sociabilizar, soy muy creativo y siempre dejo lo mejor de
              mi.
            </p>
            <br />
            <h3 className="quiensoy" style={{ marginBottom: "25px" }}>
              Mi Background?
            </h3>
            <p className="texto">
              ✔️ Tengo un bachillerato de economía y gestión por la especialidad
              de mi secundario por lo que me gustan mucho los números y las
              matemáticas.
            </p>
            <br />
            <p className="texto">
              ✔️ luego comencé la carrera de ingeniería industrial la cual
              estuve cursando durante dos años.
            </p>
            <br />
            <p className="texto">
              ✔️ después de pasar por varios trabajos me recomendaron Henry, me
              intereso bastante y decidí probar, lo cual encontré una pasión por
              la programación.
            </p>
            <br />
            <p className="texto">
              ✔️ actualmente estoy en búsqueda laboral para poder explotar mis
              conocimientos y desenvolverme en lo que me gusta.😁🔔
            </p>
            <br />
            <p className="textoC">
              ¿Creés que soy lo que tu equipo está buscando? No dudes en
              <Link
                to="section4"
                style={{
                  color: "white",
                  cursor: "pointer",
                  textDecoration: "underline",
                  marginLeft: "5px",
                }}
              >
                contactarme.
              </Link>
            </p>
          </p>
        </div>
        <div className="proyectos" id="section2">
          <div>
            <div className="contenedorrr2">
              <h3
                className="quiensoy"
                style={{ marginTop: "30px", color: "white" }}
              >
                Proyectos:
              </h3>
            </div>

            <div className="contenedorrr">
              <div className="divProyec">
                <p className="pApps">
                  <b
                    style={{
                      fontWeight: "550",
                      color: "#84c95f",
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "center",
                    }}
                  >
                    Dogs App !
                  </b>{" "}
                  es una Single Page Application realizada como primer proyecto
                  individual para el bootcamp de Henry utilizando React para el
                  fornt-end y Redux como state management. Todos los componentes
                  fueron creados con CSS puro sin uso de librerias externas. La
                  SPA (Single Page Application) consume datos de una API, a
                  traves de un Back-end desarrollado en NodeJS utilizando
                  Express agregando nuevas funcionalidades a la API original.
                </p>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyConten: "center",
                  marginTop: "0",
                  flexDirection: "column",
                  width: "80%",
                }}
              >
                <a
                  href="https://dogsclientt.vercel.app/"
                  key="dogs"
                  style={{
                    width: "750px",
                    height: "400px",
                    marginLeft: "100px",
                    marginRight: "0",
                  }}
                >
                  <button
                    className="botonVisitar"
                    style={{
                      cursor: "pointer",
                      width: "750px",
                      height: "400",
                      border: "none",
                      background: "none",
                      color: "white",
                      marginLeft: "0",
                      marginRight: "0",
                    }}
                  >
                    <img
                      style={{
                        width: "750px",
                        height: "400px",
                        marginLeft: "0",
                        marginRight: "0",
                      }}
                      src={dog}
                    />
                    Visitar Dogs App!
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="contenedorrr" style={{ marginTop: "25px" }}>
            <div className="divProyec">
              <p
                className="pApps"
                /* style={{
                  width: "550px",
                  marginLeft: "60px",
                  marginRight: "20px",
                  marginBottom: "0",
                  marginTop: "0",
                }} */
              >
                <b
                  style={{
                    fontWeight: "550",
                    color: "#84c95f",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                  }}
                >
                  Henry Fitness !
                </b>{" "}
                Henry Fitness! es una aplicación. Participacion en un equipo de
                desarrollo agil con sprints de una semana presentandole a un
                Product Owner avances sobre el desarrollo de una app completa de
                un E-commerce con diseño y desarrollo de las siguientes
                features: (CRUD de productos, auth, checkout, catalogo, etc..),
                que busca simplificar por una parte al usuario, con información
                (staff, actividades, dirección, etc.) y con la suscripción tanto
                al gimnasio como a las actividades del mismo. Y por otra parte
                al administrador, brindándole todas las herramientas necesarias
                para el manejo del día a día (turnos, usuarios, profesionales,
                etc.). Cuenta con división de perfiles. Uno de administrador,
                otra de clientes y una mas para potenciales clientes, siendo las
                tres vistas totalmente diferentes y amoldándose a las
                necesidades de todos los tipos de usuarios.{" "}
              </p>
            </div>
            <div
              style={{
                display: "flex",
                justifyConten: "flex-end",
                marginTop: "0",
                flexDirection: "column",
                width: "80%",
              }}
            >
              <a
                href="https://hfitness.vercel.app/"
                key="fitness"
                style={{
                  cursor: "pointer",
                  width: "750px",
                  height: "400px",
                  marginLeft: "100px",
                  marginRight: "0",
                }}
              >
                <button
                  className="botonVisitar"
                  style={{
                    cursor: "pointer",
                    width: "750px",
                    height: "400",
                    border: "none",
                    background: "none",
                    color: "white",
                    marginLeft: "0",
                    marginRight: "0",
                  }}
                >
                  <img
                    style={{
                      width: "750px",
                      height: "400px",
                      marginLeft: "0",
                      marginRight: "0",
                    }}
                    src={gym}
                  />
                  Visitar Henry Fitness!
                </button>
              </a>
            </div>
          </div>
        </div>
        <div
          id="section3"
          style={{ paddingTop: "180px", paddingBottom: "80px" }}
        >
          <div>
            <h3 className="quiensooy">Tecnologías:</h3>
            <div className="contenedorTecnologias">
              <OverlayTrigger
                key={"bottom"}
                placement={"bottom"}
                overlay={
                  <Tooltip
                    id={`tooltip-${"bottom"}`}
                    style={{ color: "white" }}
                  >
                    javascript
                  </Tooltip>
                }
              >
                <div className="loguitos">
                  <img
                    src="https://api.iconify.design/ion:logo-javascript.svg"
                    alt="img-logo"
                    className="img"
                  />
                </div>
              </OverlayTrigger>
              <OverlayTrigger
                key={"bottom"}
                placement={"bottom"}
                overlay={
                  <Tooltip
                    id={`tooltip-${"bottom"}`}
                    style={{ color: "white" }}
                  >
                    HTML
                  </Tooltip>
                }
              >
                <div className="loguitos">
                  <img
                    src="https://api.iconify.design/mdi:language-html5.svg"
                    alt="img-logo"
                    className="img"
                  />
                </div>
              </OverlayTrigger>
              <OverlayTrigger
                key={"bottom"}
                placement={"bottom"}
                overlay={
                  <Tooltip
                    id={`tooltip-${"bottom"}`}
                    style={{ color: "white" }}
                  >
                    CSS
                  </Tooltip>
                }
              >
                <div className="loguitos">
                  <img
                    src="https://api.iconify.design/teenyicons:css3-solid.svg"
                    alt="img-logo"
                    className="img"
                  />
                </div>
              </OverlayTrigger>
              <OverlayTrigger
                key={"bottom"}
                placement={"bottom"}
                overlay={
                  <Tooltip
                    id={`tooltip-${"bottom"}`}
                    style={{ color: "white" }}
                  >
                    React
                  </Tooltip>
                }
              >
                <div className="loguitos">
                  <img
                    src="https://api.iconify.design/akar-icons:react-fill.svg"
                    alt="img-logo"
                    className="img"
                  />
                </div>
              </OverlayTrigger>
              <OverlayTrigger
                key={"bottom"}
                placement={"bottom"}
                overlay={
                  <Tooltip
                    id={`tooltip-${"bottom"}`}
                    style={{ color: "white" }}
                  >
                    Redux
                  </Tooltip>
                }
              >
                <div className="loguitos">
                  <img
                    src="https://api.iconify.design/bxl:redux.svg"
                    alt="img-logo"
                    className="img"
                  />
                </div>
              </OverlayTrigger>
              <OverlayTrigger
                key={"bottom"}
                placement={"bottom"}
                overlay={
                  <Tooltip
                    id={`tooltip-${"bottom"}`}
                    style={{ color: "white" }}
                  >
                    Bootstrap
                  </Tooltip>
                }
              >
                <div className="loguitos">
                  <img
                    src="https://api.iconify.design/cib:bootstrap.svg"
                    alt="img-logo"
                    className="img"
                  />
                </div>
              </OverlayTrigger>
              <OverlayTrigger
                key={"bottom"}
                placement={"bottom"}
                overlay={
                  <Tooltip
                    id={`tooltip-${"bottom"}`}
                    style={{ color: "white" }}
                  >
                    Node
                  </Tooltip>
                }
              >
                <div className="loguitos">
                  <img
                    src="https://api.iconify.design/fa-brands:node.svg"
                    alt="img-logo"
                    className="img"
                  />
                </div>
              </OverlayTrigger>
            </div>
            <div
              className="contenedorTecnologias"
              style={{ marginBottom: "30px" }}
            >
              <OverlayTrigger
                key={"bottom"}
                placement={"bottom"}
                overlay={
                  <Tooltip
                    id={`tooltip-${"bottom"}`}
                    style={{ color: "white" }}
                  >
                    Express
                  </Tooltip>
                }
              >
                <div className="loguitos">
                  <img
                    src="https://api.iconify.design/simple-icons:express.svg"
                    alt="img-logo"
                    className="img"
                  />
                </div>
              </OverlayTrigger>
              <OverlayTrigger
                key={"bottom"}
                placement={"bottom"}
                overlay={
                  <Tooltip
                    id={`tooltip-${"bottom"}`}
                    style={{ color: "white" }}
                  >
                    Sequelize
                  </Tooltip>
                }
              >
                <div className="loguitos">
                  <img
                    src="https://api.iconify.design/file-icons:sequelize.svg"
                    alt="img-logo"
                    className="img"
                  />
                </div>
              </OverlayTrigger>
              <OverlayTrigger
                key={"bottom"}
                placement={"bottom"}
                overlay={
                  <Tooltip
                    id={`tooltip-${"bottom"}`}
                    style={{ color: "white" }}
                  >
                    PostgresSQL
                  </Tooltip>
                }
              >
                <div className="loguitos">
                  <img
                    src="https://api.iconify.design/akar-icons:postgresql-fill.svg"
                    alt="img-logo"
                    className="img"
                  />
                </div>
              </OverlayTrigger>

              <OverlayTrigger
                key={"bottom"}
                placement={"bottom"}
                overlay={
                  <Tooltip
                    id={`tooltip-${"bottom"}`}
                    style={{ color: "white" }}
                  >
                    Git
                  </Tooltip>
                }
              >
                <div className="loguitos">
                  <img
                    src="https://img.icons8.com/ios-filled/50/000000/git.png"
                    alt="img-logo"
                    className="img"
                  />
                </div>
              </OverlayTrigger>

              <OverlayTrigger
                key={"bottom"}
                placement={"bottom"}
                overlay={
                  <Tooltip
                    id={`tooltip-${"bottom"}`}
                    style={{ color: "white" }}
                  >
                    Trello
                  </Tooltip>
                }
              >
                <div className="loguitos">
                  <img
                    src="https://img.icons8.com/ios-filled/50/000000/trello.png"
                    alt="img-logo"
                    className="img"
                  />
                </div>
              </OverlayTrigger>
            </div>
          </div>
        </div>
        <div id="section4">
          <div>
            <h3 className="quiensooy">Contáctame:</h3>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                flexWrap: "wrap",
                width: "100%",
                justifyContent: "space-around",
                marginTop: "50px",
                marginBottom: "30px",
              }}
            >
              <div
                style={{
                  textAlign: "start",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  marginLeft: "-100px",
                  alignItems: "flex-start",
                  marginBottom: "15px",
                }}
              >
                <h4 style={{ marginLeft: "40px", textAlign: "start", color: "white" }}>
                  <img
                    /* src="https://api.iconify.design/carbon:email-new.svg" */
                    src="https://cdn.icon-icons.com/icons2/1826/PNG/512/4202011emailgmaillogomailsocialsocialmedia-115677_115624.png"
                    className="imgContacto"
                  />
                  markoschneider34@gmail.com
                </h4>
                <h4 style={{ textAlign: "start", marginLeft: "40px", color: "white" }}>
                  <img
                    /* src="https://api.iconify.design/ic:baseline-phone.svg" */
                    src="https://e7.pngegg.com/pngimages/991/503/png-clipart-yellow-telephone-logo-computer-icons-mobile-phones-telephone-font-awesome-operation-underground-railroad-inc-phone-icon-miscellaneous-angle.png"
                    className="imgContacto"
                  />{" "}
                  (+54) 9 3515930559
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
