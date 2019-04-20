import React, { Component } from 'react'

class ItemForm extends Component {
  state = {
    maxComplexity: null
  }

  setComplexity = (e) => {
    let val = Number(e.target.value)
    this.setState(prevState => ({
      maxComplexity: val
    }))
  }

  renderOptions = (quantity) => {
    let options = []
    for (let i = 0; i < quantity + 1; i++) {
      options.push(<option value={i}>{i}</option>)
    }
    return options
  }

  render() { 
    console.log(this.props.itemToEdit)
    return (
      <div className="form-container">
        <input placeholder="Name" type="text"/>
        <input placeholder="Description" type="text"/>

        
        {/* <input onChange={this.setComplexity} placeholder="Max Complexity" type="number"/>
        {
          this.state.maxComplexity &&
          <select name="complexity" id="">
            {this.renderOptions(this.state.maxComplexity)}
          </select>
        } */}
      </div>
    );
  }
}
 
export default ItemForm;