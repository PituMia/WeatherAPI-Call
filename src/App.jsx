import "./assets/App.css";
import { useState } from 'react';
import BarraNav from "./components/BarraNav";
import TiempoComponente from "./components/weatherApi";
import Cargando from "./components/cargando";


function App() {
  const [count, setCount] = useState(0)

  return (
    
      <div className="App">
        <BarraNav />
        <TiempoComponente />
        
      </div>
      
   
  )
}

export default App;
