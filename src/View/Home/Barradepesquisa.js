import React from 'react';
import "./Barradepesquisa.css";

import restaurante from '../../Main/img/restaurante.png'
import teatro from '../../Main/img/teatro.png'
import museu from '../../Main/img/museu.png'
import festa from '../../Main/img/festa.png'
import cinema from '../../Main/img/cinema.png'

export default function estabelecimentos (){
    const estabelecimentos = [
        {
          id: 1,
          title: "RESTAURANTES",
          figure: restaurante
        },
        {
          id: 2,
          title: "TEATROS",
          figure: teatro
        },
        {
          id: 3,
          title: "MUSEUS",
          figure: museu
        },
        {
          id: 4,
          title: "FESTAS",
          figure: festa
        },
        {
          id: 5,
          title: "CINEMAS",
          figure: cinema
        },
      ];
    
      return (
        <div className="estabelecimentos">
            <ul>
              {estabelecimentos.map(estabelecimentos => (
                <li key={estabelecimentos.id}>
                  <img src={estabelecimentos.figure} alt=""/>
                  <titulo>{estabelecimentos.title}</titulo>
                  {" "}
                </li>
              ))}
            </ul>
            </div>
      );
    }
    