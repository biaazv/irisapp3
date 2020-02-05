import React from "react";
import { Route, Switch } from "react-router-dom";
      

import Sobre from "../View/Sobre/Sobre";
import Manifesto from "../View/Manifesto/Manifesto";
import Aplicativo from "../View/Aplicativo/Aplicativo";
import index from "../View/Home/index";
import Login from "../View/Login/Login";
import Cadastro from "../View/Login/Cadastro";
import Buscar from "../View/Buscar/Buscar";


export default function Routes() {
  return (
    <Switch>
      <Route exact path="/sobre" component={Sobre} />
      <Route exact path="/Manifesto" component={Manifesto} />
      <Route exact path="/Aplicativo" component={Aplicativo} />
      <Route exact path="/" component={index} />
      <Route exact path="/Login" component={Login} />
      <Route exact path="/Cadastro" component={Cadastro} />
      <Route exact path="/Buscar" component={Buscar} />
    </Switch>
  );
}
