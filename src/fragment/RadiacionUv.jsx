import React, { useEffect, useState, useRef } from 'react';
import '../css/style.css';
import '../css/style_semaforo.css';
import Footer from './Footer';
import BarraMenu from './BarraMenu';
import mapboxgl from 'mapbox-gl';
import { FaRegLightbulb, FaLightbulb, FaExclamationTriangle, FaRegFrown, FaRegSadTear } from 'react-icons/fa';
/**
const UVSemaforo = ({ nivel }) => {
  let icono;
  let color;
  let mensaje;

  if (nivel >= 0 && nivel <= 2) {
    color = '#77dd77'; // Verde claro
    icono = <FaRegLightbulb />;
    mensaje = 'Bajo';
  } else if (nivel > 2 && nivel <= 5) {
    color = '#ffff66'; // Amarillo
    icono = <FaLightbulb />;
    mensaje = 'Moderado';
  } else if (nivel > 5 && nivel <= 7) {
    color = '#ffcc33'; // Naranja
    icono = <FaExclamationTriangle />;
    mensaje = 'Alto';
  } else if (nivel > 7 && nivel <= 10) {
    color = '#ff6961'; // Rojo
    icono = <FaRegFrown />;
    mensaje = 'Muy alto';
  } else {
    color = '#800080'; // PÃºrpura oscuro
    icono = <FaRegSadTear />;
    mensaje = 'Extremo';
  }

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Índice UV: {nivel}</h2>
      <div
        style={{
          width: '150px',
          height: '250px',
          backgroundColor: '#f5f5f5', // Fondo gris claro
          borderRadius: '15px',
          padding: '20px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-around',
          alignItems: 'center',
        }}
      >
        <div style={{ fontSize: '48px', color }}>{icono}</div>
        <div style={{ fontSize: '24px', fontWeight: 'bold' }}>{mensaje}</div>
      </div>
      <p>Protégete del sol adecuadamente según el nivel de radiación UV.</p>
    </div>
  );
};
*/
const UVSemaforo = ({ nivel }) => {
    const $lucesDelCirculo = useRef([]);

    useEffect(() => {
        const nivelColor = getColorForLevel(nivel);

        $lucesDelCirculo.current.forEach((luz, index) => {
            luz.classList.remove('green', 'yellow', 'orange', 'red', 'purple'); // Elimina los colores anteriores
            luz.classList.add(getColorForIndex(index, nivel)); // Agrega el color correspondiente al nivel y la posición
        });
    }, [nivel]);

    const getColorForLevel = (nivel) => {
        if (nivel >= 0 && nivel <= 2) {
            return 'green'; // Bajo
        } else if (nivel > 2 && nivel <= 5) {
            return 'yellow'; // Moderado
        } else if (nivel > 5 && nivel <= 7) {
            return 'orange'; // Alto
        } else if (nivel > 7 && nivel <= 10) {
            return 'red'; // Muy alto
        } else if (nivel > 10 && nivel <= 15) {
            return 'purple'; // Extremo
        } else {
            return 'blue';
        }
    };

    const getColorForIndex = (index, nivel) => {
        const nivelColor = getColorForLevel(nivel);
        const colors = ['purple', 'red', 'orange', 'yellow', 'green']; // Orden de colores

        if (index === colors.indexOf(nivelColor)) {
            return nivelColor; // Asigna el color correspondiente a la posición adecuada
        } else {
            return 'luces-circulo'; // Conserva la clase base para otras posiciones
        }
    };

    const getMessageForColor = (color) => {
        switch (color) {
            case 'green':
                return 'Puede disfrutar del sol con precaución.';
            case 'yellow':
                return 'Aplique protector solar y use sombrero.';
            case 'orange':
                return 'Evite el sol entre las 10 a.m. y las 4 p.m.';
            case 'red':
                return 'Busque sombra y use protector solar.';
            case 'purple':
                return 'Evite la exposición al sol en horas de máxima radiación.';
            default:
                return '';
        }
    };

    return (
        <div className="container">
            <div className="semaforo">
                <span ref={(el) => $lucesDelCirculo.current[0] = el} className="luces-circulo">
                    {getMessageForColor('green')}
                </span>
                <span ref={(el) => $lucesDelCirculo.current[1] = el} className="luces-circulo">
                    {getMessageForColor('yellow')}
                </span>
                <span ref={(el) => $lucesDelCirculo.current[2] = el} className="luces-circulo">
                    {getMessageForColor('orange')}
                </span>
                <span ref={(el) => $lucesDelCirculo.current[3] = el} className="luces-circulo">
                    {getMessageForColor('red')}
                </span>
                <span ref={(el) => $lucesDelCirculo.current[4] = el} className="luces-circulo">
                    {getMessageForColor('purple')}
                </span>
                
            </div>
        </div>
    );
};



const MapComponent = () => {
    const mapa = [
        {
            lat: -0.180653,
            lon: -78.467834,
            label: 'Quito',
        },
    ];

    useEffect(() => {
        mapboxgl.accessToken = 'pk.eyJ1Ijoia2FyZW41NTUiLCJhIjoiY2xxeThrODJ6MGt3dDJqcGduazVnenFyYiJ9.mp7AsHPGexTU9t6GuVmV4g'; // Reemplaza con tu token de acceso a Mapbox

        const map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v11', // Estilo del mapa (puedes cambiarlo segÃºn tus preferencias)
            center: [-4.0355, -79.2037], // Coordenadas iniciales para centrar el mapa (Nueva York)
            zoom: 1, // Nivel de zoom inicial
        });

        mapa.forEach((punto) => {
            new mapboxgl.Marker()
                .setLngLat([punto.lon, punto.lat])
                .setPopup(new mapboxgl.Popup().setHTML(<h3>${punto.label}</h3>))
                .addTo(map);
        });
        return () => map.remove();
    }, [mapa]);

    return (
        <div >
            <header>
                <BarraMenu />
            </header>
            <main >
                <section className="text-center">
                    <div id="map" style={{ height: '450px' }} className="w-100"></div>
                </section>
                <UVSemaforo nivel={5}></UVSemaforo>
            </main>
            <Footer />
        </div>


    );
};

export default MapComponent;