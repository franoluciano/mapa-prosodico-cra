import { useEffect, useState } from "react";
import { AwesomeButton } from "react-awesome-button";
import { Link } from "react-scroll";
import Container from "./container";
import {
  MapContainer,
  TileLayer,
  Polygon,
  Marker,
  useMap,
} from "react-leaflet";
import zones from "./geojson/zones.json";
import Menu from "./menu";

const styles = [
  { color: "#dc322f", opacity: 1, weight: 1 },
  { color: "#cb4b16", opacity: 1, weight: 1 },
  { color: "#b58900", opacity: 1, weight: 1 },
  { color: "#859900", opacity: 1, weight: 1 },
  { color: "#b58900", opacity: 1, weight: 1 },
  { color: "#859900", opacity: 1, weight: 1 },
  { color: "#b58900", opacity: 1, weight: 1 },
  { color: "#6c71c4", opacity: 1, weight: 1 },
  { color: "#268bd2", opacity: 1, weight: 1 },
];

const Mapa = () => {
  const [activeZone, setActiveZone] = useState(null);
  const [zoneDetails, setZoneDetails] = useState(null);
  const [filteredPoints, setFilteredPoints] = useState([]);
  const [select1, setSelect1] = useState({
    value: "phrase",
    label: "Frases leídas",
  });
  const [select2, setSelect2] = useState({ value: "urban", label: "Urbano" });
  const [select3, setSelect3] = useState({ value: "male", label: "Mujer" });
  const [center, setCenter] = useState([-36.95574, -70.04883]);
  const [zoom, setZoom] = useState(4);

  useEffect(() => {
    if (activeZone) {
      const { index } = activeZone.properties;
      const details = require(`./geojson/zone${index}`);
      setZoneDetails(details.features);
    }
  }, [activeZone]);

  useEffect(() => {
    if (zoneDetails && select1 && select2 && select3) {
      setFilteredPoints(
        zoneDetails.filter(
          ({ properties }) =>
            properties.task === select1.value &&
            properties.area === select2.value &&
            properties.gender === select3.value
        )
      );
    }
  }, [zoneDetails, select1, select2, select3]);

  useEffect(() => {
    if (filteredPoints.length > 0) {
      const firstPoint = filteredPoints[0];
      const { coordinates } = firstPoint.geometry;
      const newCenter = [coordinates[1], coordinates[0]];
      setCenter(newCenter);
      setZoom(6);
      console.log("new center", newCenter);
    }
  }, [filteredPoints]);

  return (
    <Container>
      <h1 style={{ fontSize: 50 }}>Mapa</h1>

      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div id="mapa">
          <MapContainer
            center={center}
            zoom={zoom}
            style={{ height: "80vh", width: "40vw" }}
          >
            <TileLayer url="https://{s}.tile.osm.org/{z}/{x}/{y}.png" />
            {activeZone
              ? filteredPoints &&
                filteredPoints.map((d, index) => {
                  const positions = activeZone.geometry.coordinates.map((a) =>
                    a.map((b) => b.map((c) => [c[1], c[0]]))
                  );
                  return (
                    <>
                      <Marker
                        key={index}
                        position={[
                          d.geometry.coordinates[1],
                          d.geometry.coordinates[0],
                        ]}
                      ></Marker>
                      <Polygon
                        pathOptions={styles[index]}
                        key={activeZone.properties.name}
                        positions={positions}
                      />
                    </>
                  );
                })
              : zones.features.map((zone, index) => {
                  const positions = zone.geometry.coordinates.map((a) =>
                    a.map((b) => b.map((c) => [c[1], c[0]]))
                  );

                  return (
                    <Polygon
                      pathOptions={styles[index]}
                      key={zone.properties.name}
                      positions={positions}
                    />
                  );
                })}
            {/* <Marker position={center}></Marker> */}
            <NewCenter newCenter={center} />
          </MapContainer>
        </div>
        <Menu
          activeZone={activeZone}
          setActiveZone={setActiveZone}
          select1={select1}
          setSelect1={setSelect1}
          select2={select2}
          setSelect2={setSelect2}
          select3={select3}
          setSelect3={setSelect3}
        />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Link to="inicio" spy={true} smooth={true}>
          <AwesomeButton style={{ marginTop: 20 }} type="primary">
            Inicio
          </AwesomeButton>
        </Link>
        <Link to="final" spy={true} smooth={true}>
          <AwesomeButton style={{ marginTop: 20 }} type="primary">
            Contacto
          </AwesomeButton>
        </Link>
      </div>
    </Container>
  );
};

const NewCenter = ({ newCenter }) => {
  const map = useMap();
  useEffect(() => {
    if (newCenter !== [-36.95574, -70.04883]) {
      map.flyTo(newCenter, 6);
    }
  }, [map, newCenter]);
  console.log("map center:", map.getCenter());
  return null;
};

export default Mapa;
