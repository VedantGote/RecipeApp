import React from "react"
import IA from "react-image-appear"

import {Link} from "react-router-dom"

class Recipe extends React.Component
{
  constructor()
  {

  }
  render()
  {
    console.log(this.props.rdata)
    return <div className = "container">
              <div className="row">
              {this.props.rdata.map((item)=> 
                {
                  return(
                  <div key = {item.recipe_id} style = {{marginBottom:"2rem"}} className="col-md-4">
                  <div className="recipes__box" key = {item.recipe_id}>
                    <IA src = {item.image_url} 
                        placeholder = "https://static.food2fork.com/Buffalo2BChicken2BGrilled2BCheese2BSandwich2B5002B4983f2702fe4.jpg"
                        animation="zoomIn"
                        animationDuration="1s"/>
                      <div className="recipe__text">
                        <h5 className = "recipes__title" >{item.title.length<20?`${item.title}`:`${item.title.substring(0,20)}...`}</h5>
                        <p className = "recipes__subtitle">Publisher: {item.publisher}</p>
                    </div>
                   <button className="recipe_buttons">
                <Link to={{ 
                  pathname: `/recipedetail/${item.recipe_id}`,
                  state: { cdata:item }
                }}>View Recipe</Link>
              </button>
                  </div>  
                </div>
                )
            })}
            </div>          
          </div>
  }
}
export default Recipe