import React from 'react';
import iris_roxo from "./img/iris_roxo.png";
import './Cabecalho.css';


export default function Cabecalho() {
  return (
    <body>
    <header>
      <title>IRIS</title> 
      
       <nav>
        <label for="toggle">&#9776;</label>
        <input type="checkbox" id="toggle"/>
        <div className="menu">
          <a href="/sobre">SOBRE</a>
            <a href="/manifesto">MANIFESTO</a>
            <a href="/aplicativo"> APLICATIVO</a>
            <a  className="logo" href="/"><img clasName="logo"src={iris_roxo} alt=""/></a>
            <a href="/login">LOGIN</a>
            <input type="text" id="txtBusca" placeholder="Pesquisar"/>

            

        </div>
    </nav>
    </header>
  </body>
  )
}