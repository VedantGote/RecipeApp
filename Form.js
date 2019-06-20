import React from "react"

class Form extends React.Component
{
  constructor()
  {

  }
  render()
  {
    return <div>
            <form onSubmit = {this.props.getRep} style = {{marginBottom:"2rem"}}>
              <input className ="form__input" type = "text" name = "search"/>
              <button className ="form__button">Search</button>
            </form>
          </div>
  }
}
export default Form