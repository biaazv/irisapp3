import React from "react";

import Cabecalho from "./Main/Cabecalho"
import Routes from "./Main/Routes"
import Rodape from "./Main/Rodape.js";
import { BrowserRouter } from "react-router-dom";


export default function App() {
  return (
    <BrowserRouter>
     <Cabecalho />
     <Routes />
     <Rodape />

    </BrowserRouter>
  );
}

