import { useState } from "react";
import Layout from "./layout";
import Bienvenida from "./bienvenida";
import Mapa from "./mapa";
import Final from "./final";

const App = () => {
  const [backgroundImage] = useState(
    "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
  );

  return (
    <Layout backgroundImage={backgroundImage}>
      <Bienvenida />
      <Mapa />
      <Final />
    </Layout>
  );
};

export default App;
