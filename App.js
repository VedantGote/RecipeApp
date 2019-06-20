import React from "react"

import Form from "./Form.js"

class App extends React.Component
{
  getRecipe = (event) =>
  {
    event.preventDefault();
    console.log("it ij");
  }
  render()
  {
    return <Form getRep = {this.getRecipe}/>
  }
}
export default App