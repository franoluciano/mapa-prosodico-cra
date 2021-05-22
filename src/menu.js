import zones from "./geojson/zones.json";
import { AwesomeButton } from "react-awesome-button";
import Select from "react-select";

const options1 = [
  { value: "phrase", label: "Frases leídas" },
  { value: "dct", label: "Completación de discurso" },
  { value: "conv", label: "Entrevista" },
];
const options2 = [
  { value: "urban", label: "Urbano" },
  { value: "rural", label: "Rural" },
];
const options3 = [
  { value: "male", label: "Mujer" },
  { value: "female", label: "Hombre" },
];

const Menu = ({
  activeZone,
  setActiveZone,
  select1,
  select2,
  select3,
  setSelect1,
  setSelect2,
  setSelect3,
}) => {
  const handlePressButton = (zone) => {
    setActiveZone(zone);
  };

  return (
    <div style={{ width: "40%" }}>
      <strong>Selecciona una zona: </strong>{" "}
      {activeZone && <span>{activeZone.properties.name}</span>}
      <br />
      {zones.features.map((zone, i) => (
        <AwesomeButton
          key={i}
          style={{ margin: 5 }}
          type="primary"
          size="small"
          onPress={() => {
            handlePressButton(zone);
          }}
        >
          {i + 1}
        </AwesomeButton>
      ))}
      <div style={{ margin: 10 }}>
        <Select value={select1} onChange={setSelect1} options={options1} />
        <Select value={select2} onChange={setSelect2} options={options2} />
        <Select value={select3} onChange={setSelect3} options={options3} />
      </div>
    </div>
  );
};

export default Menu;
