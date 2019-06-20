import React from "react"
import {BrowserRouter,Switch,Route} from "react-router-dom"

import App from "./App.js"
import RecipeDetail from "./RecipeDetail.js"

const Router = () =>
(
  <BrowserRouter>
    <Switch>
      <Route path = "/" component = {App} exact />
      <Route path = "/recipedetail/:id" component = {RecipeDetail} exact />
    </Switch>
  </BrowserRouter>
)

export default Router