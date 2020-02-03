import React from 'react';
import iris_roxo from '../Main/img/iris_roxo.png'
import facebook from '../Main/img/facebook.png'
import instagram from '../Main/img/instagram.png'
import email_roxo from '../Main/img/email_roxo.png'
import "./Rodape.css";

export default function Rodape() {
  return (
    <footer>
      <img className="logorodape" src={iris_roxo} alt=""></img>
      
      <div className="mapadosite">
       <h4> Mapa do Site </h4>
        <a href="/sobre"><p>Sobre</p></a>
        <a href="/manifesto">   <p>Manifesto LGBT+</p></a>
        <a href="/login"><p>Faça parte</p></a>
      </div>

      <div className="social">

        <img className="social-item" src={facebook} alt=""></img>
        <a href="http://instagram.com/oappiris"> <img className="social-item" src={instagram} alt=""></img> </a>
        <a href="mailto:irisapp.contato@gmail.com"><img className="social-item" src={email_roxo} alt=""></img> </a>
      </div>
    </footer>
  );
}
