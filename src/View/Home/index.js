import React from "react";

import Banner from "./Banner";
import Barradepesquisa from "./Barradepesquisa";
import Conteudo from './Conteudo';


export default function Inicial() {
  return (
    <section>
      <Banner />
      <Barradepesquisa />
      <Conteudo />
    </section>
  );
}