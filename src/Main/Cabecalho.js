/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import iris_roxo from "./img/iris_roxo.png";
import './Cabecalho.css';


export default function Cabecalho() {
  return (
    <body>
      <title>IRIS</title> 
    <header>
      
    <nav>
      <div class="menu-icon">
      <i class="fa fa-bars fa-2x"></i>
      </div>

      <div class="menu">
      <ul> 
                   
        <li><a href="/sobre">SOBRE</a></li> 
        <li><a href="/manifesto">MANIFESTO</a></li> 
        <li><a href="/aplicativo">COMO FUNCIONA</a></li>         
        <li><a class="loginho" href="/"><img src={iris_roxo}/></a></li> 
        <li><a href="/Sobre">LOGIN</a></li> 
        <li><a href="/">PESQUISAR</a></li> 
      </ul>
      </div>
    </nav>
           
     
   
    </header>
  </body>
  )
}