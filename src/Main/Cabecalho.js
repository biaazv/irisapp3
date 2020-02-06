/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import iris_roxo from "./img/iris_roxo.png"; 
import './Cabecalho.css';


export default function Cabecalho() {
  return (
    <body>
      <title>IRIS</title> 
    <header>

    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <img src={iris_roxo}><a class="navbar-brand mr-auto" href="/"> IRIS </a> </img>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Alterna navegação">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar ml-auto">
      <a class="nav-item nav-link active" href="/">Sobre <span class="sr-only"></span></a>
      <a class="nav-item nav-link" href="#">Destaques</a>
      <a class="nav-item nav-link" href="#">Preços</a>
      <a class="nav-item nav-link" href="#">Desativado</a>
    </div>
  </div>
</nav>    
       
    {/* <nav>
      <div class="menu-icon">
      <i class="fa fa-bars fa-2x"></i>
      </div>

      <div class="menu">
      <ul> 
                   
        <li><a href="/sobre">SOBRE</a></li> 
        <li><a href="/manifesto">MANIFESTO</a></li> 
        <li><a href="/aplicativo">COMO FUNCIONA</a></li>         
        <li><a class="loginho" href="/"><img src={iris_roxo}/></a></li> 
        <li><a href="/Login">LOGIN</a></li> 
        <li><a href="/">PESQUISAR</a></li> 
      </ul>
       </div>
    </nav>  
     */} 
   
    </header>
  </body>
  )
}