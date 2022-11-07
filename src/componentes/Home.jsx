import React from "react";
import "./Home.css";
import { Link, animateScroll as scroll } from "react-scroll";

export default function Home() {
  return (
    <div className="home">
      <nav
        className="nav-conteiner"
        style={{
          position: "fixed",
          width: "100%",
          height: "8%",
          display: "flex",
          justifyContent: "center",
          zIndex: "8",
        }}
      >
        <Link
          to="section1"
          spy={true}
          smooth={true}
          duration={300}
          offset={-70}
          style={{ padding: "0 20px" }}
        >
          <button className="boton">Inicio</button>
        </Link>
        <Link
          to="section2"
          spy={true}
          smooth={true}
          duration={300}
          offset={-70}
          style={{ padding: "0 20px" }}
        >
          <button className="boton">Proyectos</button>
        </Link>
        <Link
          to="section3"
          spy={true}
          smooth={true}
          duration={300}
          offset={-70}
          style={{ padding: "0 20px" }}
        >
          <button className="boton">Tecnologías</button>
        </Link>
        <Link
          to="section4"
          spy={true}
          smooth={true}
          duration={300}
          offset={-70}
          style={{ padding: "0 20px" }}
        >
          <button className="boton">Contáctame</button>
        </Link>
      </nav>
      <div className="contenedorPresentacion">
        <div id="section1" className="presentacion">
          <div className="nombre">
            <div className="img-name">
                <img src="" />
            </div>
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
      <div className="contenedorinfo">
        <p className="texto">
          <h3 className="quiensoy" style={{ marginBottom: "25px" }}>
            Quién soy?
          </h3>
          <p>
            🔹Me considero una persona muy entusiasta a la hora de trabajar, soy
            muy sociable, me gusta trabajar en equipo y aprender de los demás.
          </p>
          <br />
          <h3 className="quiensoy" style={{ marginBottom: "25px" }}>
            Porque yo?
          </h3>
          <p>
            🔸Más allá de los conocimientos técnicos, me gusta estar en
            constante aprendizaje, aprendo muy rapido, me gusta trabajar en
            equipo y sociabilizar, soy muy creativo y siempre dejo lo mejor de
            mi.
          </p>
          <br />
          <h3 className="quiensoy" style={{ marginBottom: "25px" }}>
            Mi Background?
          </h3>
          <p>
            ✔ Tengo un bachillerato de economía y gestión por la especialidad de
            mi secundario por lo que me gustan mucho los números y las
            matemáticas.
          </p>
          <br />
          <p>
            ✔ luego comencé la carrera de ingeniería industrial la cual estuve
            cursando durante dos años y por cuestiones personales abandone.
          </p>
          <br />
          <p>
            ✔ después de pasar por varios trabajos me recomendaron Henry, me
            intereso bastante y decidí abandonar mi trabajo actual para probar,
            lo cual encontré una pasión por la programación.
          </p>
          <br />
          <p>
            ✔ actualmente estoy en búsqueda laboral para poder explotar mis
            conocimientos y desenvolverme en lo que me gusta.😁🔔
          </p>
          <br />
          <p>
            ¿Creés que soy lo que tu equipo está buscando? No dudes en
            contactarme.
          </p>
        </p>
      </div>
    </div>
  );
}
