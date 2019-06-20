import React from "react"
import IA from "react-image-appear"
import Form from "./Form.js"
import "./App.css"
import Recipe from "./Recipe.js"

const API_KEY = "63e2e97ef2bd864992931f357943b363"


class App extends React.Component
{
  state = 
  {
    data:[]
  }
  getRecipe = async (event) =>
  {
    event.preventDefault();
    
    const name = event.target.elements.search.value
  
    const api_call = await fetch(`https://www.food2fork.com/api/search?key=${API_KEY}&q=${name}`)

    const data = await api_call.json();
    const recipearray = data.recipes
    this.setState({data:recipearray})
  

    
    

  }
  render()
  {   
    return <div className = "App">
            <header className = "App-header">
              <h1 className = "App-title">Search the recipe you want</h1>
            </header>
            <Form getRep = {this.getRecipe}/>
            <Recipe rdata = {this.state.data}/>
           </div>
  }
}
export default App

