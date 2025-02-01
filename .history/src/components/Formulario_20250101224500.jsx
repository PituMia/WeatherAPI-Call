import React, { useState } from 'react';


const Formulario = ({newLocation}) => {

    const [ciudad, setCiudad] = useState('');

    const Enviado = (valor) => {
        valor.preventDefault();
        newLocation(ciudad);
    }
    return (
        
        <div class="d-flex row " >
            <form  onSubmit={Enviado}>
                <input class="col-9" type="text" onChange={(valor)  => setCiudad(valor.target.value) }
                    placeholder="Nombre de la Ciudad" required />
                <button type='Submit' class="col-3">Enviar</button>


            </form>
        </div>
        

    )
}

export default Formulario