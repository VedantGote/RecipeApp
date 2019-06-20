import React from "react"
import IA from "react-image-appear"
import {Link} from "react-router-dom"

class RecipeDetail extends React.Component
{
  state = {
    crecipe :{}
  }
  componentDidMount()
  {
    this.setState({crecipe:this.props.location.state})
  }
  render()
  {
    const arep = this.props.location.state.cdata;
    console.log(arep)
    return <div className="container">
              <div className="active-recipe">
              <IA className = "active-recipe__img" src = {arep.image_url} placeholder = "https://static.food2fork.com/Buffalo2BChicken2BGrilled2BCheese2BSandwich2B5002B4983f2702fe4.jpg"/>
              <h3 className = "active-recipe__title">{arep.title}</h3>
              <h4 className = "active-recipe__publisher"> Publisher: <span>{arep.title}</span></h4>
              <p className = "active-recipe__website">Website: <span><a href ={arep.publisher_url}>{arep.publisher_url}</a></span></p>
              <button className = "active-recipe__button">
                <Link to = "">
                GO HOME
                </Link>
              </button>
              </div>
           </div>
  }
}

export default RecipeDetail