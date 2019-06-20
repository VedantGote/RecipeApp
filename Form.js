import React from "react"

class Form extends React.Component
{
  constructor()
  {

  }
  render()
  {
    return <div>
            <form onSubmit = {this.props.getRep}>
              <input type = "text" name = "search" placeholder = "Type a recipe"></input>
              <button>Search</button>
            </form>
          </div>
  }
}
export default Form