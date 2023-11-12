import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Renderiza la aplicación React
ReactDOM.render(
  <React.StrictMode>
    {/* Añade la clave de API directamente aquí */}
    <script src={`https://maps.googleapis.com/maps/api/js?key=AIzaSyCbUaFDL7C08hyz9lNN7IHlJHfKQO-4mkk&libraries=places`}></script>
                                                             
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// Si deseas medir el rendimiento de tu aplicación
reportWebVitals();
