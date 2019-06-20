import React from "react"
import IA from "react-image-appear"
import Form from "./Form.js"
import "./App.css"
import Recipe from "./Recipe.js"

const API_KEY = "12e721a1c0937791d14f7bf1cdb21626"


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
    console.log()

    
    

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

