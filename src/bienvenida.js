import { AwesomeButton } from "react-awesome-button";
import { Link } from "react-scroll";
import Container from "./container";

const Bienvenida = ({ setShowMap }) => {
  return (
    <div id="inicio">
      <Container>
        <div>
          <h1 style={{ fontSize: 50 }}>
            Bienvenido al mapa prosódico de Chile
          </h1>
          <p>
            En este mapa tienes que seleccionaruna de las zonas marcadas. Al
            hacerlo, la zona seleccionada se acerca y se despliegan las
            posibilidades que el mapa ofrece.{" "}
          </p>
          <p>
            Podrás escuchar diferentes emisiones de hombres y mujeres tanto
            rurales como urbanos de ocho zonas de Chile.{" "}
          </p>
          <p>
            Además de las emisiones, podrás escuchar también una recreación de
            los tonos de cada emisión y ver gráficos de la frecuencia
            fundamental.{" "}
          </p>
          <p>
            En este momento, están disponibles algunos ejemplos de frases
            leídas, de una tarea de completación de discurso, de enumeraciones
            de tres elementos, y fragmentos de entrevistas.{" "}
          </p>
          <p>
            Este es un trabajo en construcción y, por lo mismo, permanentemente
            estamos actualizando la información.{" "}
          </p>
          <p>
            En los gráficos estilizados de frecuencia fundamental, la vocal
            tónica se marca con "*" y el símbolo "‖" indica el último rastro del
            tono.{" "}
          </p>
          <p>
            Si quieres consultar los estudios y presentaciones que se han
            realizado con este material, puedes visitar este{" "}
            <a href="https://fonetica.usach.cl/publicaciones-y-presentaciones-mapa-pros%C3%B3dico-de-chile">
              sitio
            </a>
            .
          </p>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <Link to="mapa" spy={true} smooth={true}>
            <AwesomeButton type="primary">Mapa</AwesomeButton>
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default Bienvenida;
