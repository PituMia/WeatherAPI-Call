import React, { useState } from 'react';
import "../assets/Formulario.css";


const Formulario = ({newLocation}) => {

    const [ciudad, setCiudad] = useState('');

    const Enviado = (valor) => {
        valor.preventDefault();
        newLocation(ciudad);
    }
    return (
        
        <div className="d-flex row m-1" >
            <form  onSubmit={Enviado}>
                <input className="col-9" type="text" onChange={(valor)  => setCiudad(valor.target.value) }
                    placeholder="Nombre de la Ciudad" required />
                <button type='Submit' className="col-3">Enviar</button>


            </form>
        </div>
        

    )
}

export default Formulario