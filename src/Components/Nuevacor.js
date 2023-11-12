// import Sidebar from "../src/Components/sidebar"
import React, { useState, useEffect } from 'react';
import { GoogleMap, Marker, LoadScript } from '@react-google-maps/api';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from "../Components/sidebar";



const MapContainer = () => {
  const [map, setMap] = useState(null);

  // Ajusta la altura y el ancho para un cuadro mediano centrado
  const mapContainerStyle = {
    height: '60vh',   // Ajusta la altura según tus necesidades (ejemplo: 60% de la altura visible)
    width: '60%',     // Ajusta el ancho según tus necesidades (ejemplo: 60% del ancho visible)
    margin: 'auto',   // Centra el cuadro horizontalmente
    display: 'flex',  // Usa flexbox
    alignItems: 'center',  // Centra verticalmente el cuadro
    marginTop: '100px', // Ajusta el margen superior según tus necesidades
  };

  const defaultCenter = {

  
    lat:   28.161261,
    lng:  -90.827540,
  };

  const onLoad = map => {
    setMap(map);
  };

  useEffect(() => {
    if (map) {
      // Puedes agregar lógica adicional aquí para manipular el mapa después de cargar
    }
  }, [map]);

  return (
    
    <LoadScript
      googleMapsApiKey="AIzaSyDSKS3wcKlQEhSr_1WyYl8yAbPU59WAKuw"
    >
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={13}
        center={defaultCenter}
        onLoad={onLoad}
      >
        <Marker position={defaultCenter} />
      </GoogleMap>
    </LoadScript>

    
  );
};

function App() {
  return (
    <div className="App">
         <Sidebar />
      <MapContainer />

       {/* <Sidebar/>  */}
    </div>
  );
}

export default App;
