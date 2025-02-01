import React from "react";
import Cargando from "./cargando";
import "../assets/Tarjeta.css";

const Tarjeta = ({ pintarData, cargandoData, tiempoData, fotoData }) => {
    if (cargandoData) {
        return <Cargando />;
    }

    return (
        <div>
            {pintarData ? (
                
                (() => {
                    const datos = {
                        nombre: tiempoData.name,
                        temp: `Temp: ${(tiempoData.main.temp - 273.15).toFixed(1)}°C`,
                        sensacion: `Sensacion: ${(tiempoData.main.feels_like - 273.15).toFixed(1)}°C`,
                        min: `Min: ${(tiempoData.main.temp_min - 273.15).toFixed(1)}°C`,
                        max: `Max: ${(tiempoData.main.temp_max - 273.15).toFixed(1)}°C`,
                        humedad: `Humedad: ${(tiempoData.main.humidity)}%`,
                        descripcion: (tiempoData.weather[0].description).charAt(0).toUpperCase() + tiempoData.weather[0].description.slice(1),
                        icono: `https://openweathermap.org/img/wn/${tiempoData.weather[0].icon}@2x.png`,
                        alt: tiempoData.weather[0].description,
                    };
                    let foto = fotoData;

                    return (
                        <div>
                            <div className="ratio ratio-4x3">
                            <img src={foto} className="img-fluid object-fit-cover" alt="Imagen" />
                            </div>
                            <div className="main d-flex justify-content-center">
                                <h1>{datos.nombre}</h1>
                                <h2>{datos.temp}</h2>
                            </div>
                            <div className="container ">
                                <div className="row d-flex g-3">
                                    <div className="cajita col box">
                                        <h4>{datos.sensacion}</h4>
                                    </div>
                                    <div className="cajita col box">
                                        <h4>{datos.min}</h4>
                                        <h4>{datos.max}</h4>
                                    </div>
                                    <div className="cajita col box">
                                        <h4>{datos.humedad}</h4>
                                    </div>
                                    <div className="cajita col box">
                                        <h4>{datos.descripcion}</h4>
                                        <img src={datos.icono} alt={datos.alt} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })()
            ) : null}
        </div>
    );
};

export default Tarjeta;