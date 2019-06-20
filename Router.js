import React from "react"
import {BrowserRouter as Router,Switch,Route} from "react-router-dom"

import App from "./App.js"
import RecipeDetail from "./RecipeDetail.js"

const Router = () =>
(
  <Router>
    <Switch>
      <Route path = "/" component = {App}/>
      <Route path = "/recipe" component = {RecipeDetail}/>
    </Switch>
  </Router>
)

export default Router