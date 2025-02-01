import React, { useState, useEffect } from "react";
import Formulario from "./Formulario";
import Cargando from "./cargando";
import Tarjeta from "./Tarjeta";

const TiempoComponente = () => {
    let local = "&q=";
    let miUrl = `https://api.openweathermap.org/data/2.5/weather?&appid=fe9ad00246fae28f15612e0446e8df5e&lang=es`;


    const [tiempo, setTiempo] = useState([]);
    const [cargando, setCargando] = useState(false);
    const [pintar, setPintar] = useState(false);
    const [ciudad, setCiudad] = useState("");
    const [foto,setFoto] = useState(null);
    const [error,setError] = useState(false);
    
    const getTiempo = async (city) => {

        setCargando(true);
        setCiudad(city);
        miUrl = miUrl + local + city;

        //api clima 

        await fetch(miUrl).then((response) => {
            if (!response.ok) throw (response)
            return response.json();
        })
            .then((tiempoData) => {

                setTiempo(tiempoData);
                setPintar(true);
                console.log(tiempo);
            })
            .catch(error => {
                setCargando(false);
                setPintar(false);
                setError(true);
                console.log(error)
            })
            .finally(
                () => {
                    setCargando(false)
                }
            )

        //api foto
        let fotoKey = "15ZuA-qc2GqDVVpHTws-uZueH5jHKlZ4C-_8w44-hP8";
        let urlFoto = `https://api.unsplash.com/search/photos?query=${city}&client_id=${fotoKey}`;

        await fetch(urlFoto).then((response) => {
            if (!response.ok) throw (response);
            return response.json();
        })
            .then((fotoData) => {
                if (fotoData.results.length > 0) {
                    setFoto(fotoData.results[0].urls.regular); // para url primera foto
                } else {
                    setFoto("");
                }
            })
            .catch((error) => {
                console.log("Error al obtener la foto", error);
            });
    };






return (
    <React.Fragment>
        <Formulario
            newLocation={getTiempo}
        />
        <Tarjeta
            pintarData={pintar}
            cargandoData={cargando}
            tiempoData={tiempo}
            fotoData={foto}
            errorData={error}
        />
    </React.Fragment>
)
}


export default TiempoComponente;