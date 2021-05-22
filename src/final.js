import { useState } from "react";
import { AwesomeButton } from "react-awesome-button";
import { Link } from "react-scroll";
import Container from "./container";

const Final = () => {
  const [asunto, setAsunto] = useState("");
  const [mensaje, setMensaje] = useState("");

  return (
    <Container>
      <div id="final">
        <h1 style={{ fontSize: 50 }}>Sobre esta iniciativa / comentarios</h1>
        <p>
          Si tienes algun comentario, duda o quieres dejarnos algún mensaje lo
          puedes hacer en el formulario de esta sección. No olvides dejar dentro
          del mensaje un correo electrónico para que te podamos contactar.
        </p>
        <form style={{ display: "flex", flexDirection: "column" }}>
          <label>Asunto</label>
          <input
            value={asunto}
            onChange={(e) => setAsunto(e.target.value)}
            style={{ margin: 10, height: "2rem" }}
          />
          <label>Mensaje</label>
          <textarea
            value={mensaje}
            onChange={(e) => setMensaje(e.target.value)}
            style={{ margin: 10 }}
            rows="10"
          />
        </form>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <AwesomeButton disabled={!asunto || !mensaje} type="primary">
            Enviar mensaje
          </AwesomeButton>
        </div>

        <p>
          Este proyecto fue originalmente desarrollado por{" "}
          <a href="https://jjatria.gitlab.io/mapa-prosodico/">jjatria</a>.
        </p>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
        }}
      >
        <Link to="mapa" spy={true} smooth={true}>
          <AwesomeButton type="primary">Mapa</AwesomeButton>
        </Link>
      </div>
    </Container>
  );
};

export default Final;
