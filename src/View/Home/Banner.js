import React from 'react';
import googleplay from '../../Main/img/googleplay.png';
import casal from '../../Main/img/casal.jpeg'
import "./Banner.css";

export default function Banner() {
  return (
      <div className="banner">
        <div>
        <p>
        Iris é um aplicativo que certifica locais amigáveis para o público LGBT+. 
        </p>

        <section>
        <img id="lojagoogle" src={googleplay} alt="logo do google play"></img>
        <p>Disponível na PlayStore</p>
        </section>
        </div>

        <div>
        <figure><img id="casallgbt" src={casal} alt="casal_lgbt"></img>
        <figcaption>Nossa missão é ocupar espaços com diversidade.</figcaption>
        </figure>
        </div>
    </div>
    );
}
