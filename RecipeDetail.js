import React from "react"

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
    
    console.log(this.state)
    return <div>
              
            </div>
  }
}

export default RecipeDetail