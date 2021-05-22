import { AwesomeButton } from "react-awesome-button";
import { Link } from "react-scroll";
import Container from "./container";

const Final = () => (
  <Container>
    <div id="final">
      <h1 style={{ fontSize: 50 }}>Sobre esta iniciativa / comentarios</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi volutpat
        lorem nec est venenatis, et vestibulum lacus porta. Nam sollicitudin mi
        ut dui scelerisque, ut auctor tellus sagittis. Quisque mollis maximus
        massa, at aliquam odio. Vestibulum hendrerit pellentesque mi, sit amet
        pellentesque ipsum interdum in. Suspendisse eget purus justo.
        Suspendisse rhoncus nisl quis est maximus accumsan. Ut eleifend eros a
        tellus accumsan, id facilisis lectus dapibus. Sed fringilla neque nunc,
        eget dictum libero scelerisque id. Fusce ullamcorper suscipit ultrices.
        Duis convallis consectetur ipsum, in interdum risus rhoncus id. Nam nec
        fermentum felis. Aliquam quis magna felis. Suspendisse consectetur eros
        eros, nec hendrerit enim tristique eget. Ut pulvinar vehicula ante id
        commodo. Donec in nisi dui. Proin interdum est quis lobortis pharetra.
        Sed ultricies feugiat orci. Etiam pretium nibh ut varius consequat.
        Pellentesque efficitur mattis lobortis. Vivamus sodales dictum leo, vel
        mattis est elementum non. Quisque aliquet sapien ac risus pellentesque,
        quis laoreet magna cursus. Duis mollis eleifend orci eu varius. Mauris
        molestie sem nec nisi fringilla sagittis a eget nisi. Sed hendrerit
        fringilla neque, et cursus enim laoreet sed. Etiam commodo nisi vitae
        dui fermentum, eu accumsan quam sagittis. Curabitur elementum at libero
        a vehicula. Vivamus in pretium est. Pellentesque sagittis aliquet ex nec
        eleifend. Curabitur tempus ipsum vehicula libero imperdiet feugiat.
        Donec vulputate dolor eu metus efficitur lobortis. Sed a quam sed lectus
        blandit dictum et vel sapien. Phasellus scelerisque sem id erat
        imperdiet dapibus. Vivamus vel erat semper, rutrum orci in, placerat
        odio. Suspendisse id est odio. Integer facilisis mattis lectus, eu
        vulputate odio tempor at. Integer vehicula risus lacus, ut tempus purus
        tristique id. Nulla tristique tristique bibendum. Sed blandit laoreet
        orci, ac rutrum diam congue a. Ut ante nisl, laoreet fermentum tincidunt
        ac, varius ut orci. Vestibulum tincidunt vehicula massa. Cras euismod
        quam felis, vitae luctus purus semper eget. Vivamus nisl turpis,
        efficitur ut risus non, malesuada tincidunt ex. Vestibulum ut orci
        porta, vehicula velit imperdiet, maximus dui. Aenean congue luctus urna,
        bibendum sagittis lorem sagittis ut.
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

export default Final;
