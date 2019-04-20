import React, { Component } from 'react'

class ItemForm extends Component {
  state = {
    maxComplexity: null
  }

  
  // functions below For use with user-defined options
  // setComplexity = (e) => {
  //   let val = Number(e.target.value)
  //   this.setState(prevState => ({
  //     maxComplexity: val
  //   }))
  // }

  // renderOptions = (quantity) => {
  //   let options = []
  //   for (let i = 0; i < quantity + 1; i++) {
  //     options.push(<option value={i}>{i}</option>)
  //   }
  //   return options
  // }

  render() { 
    console.log(this.props.itemToEdit)
    return (
      <div className="form-container">
        <label htmlFor="name">Name:</label>
        <input
          name="name"
          type="text"
          defaultValue={this.props.itemToEdit.name}
        />

        <label htmlFor="description">Description:</label>
        <input
          name="description"
          type="text"
          defaultValue={this.props.itemToEdit.name}
        />

        <fieldset>
          <legend>Priority</legend>
            <label htmlFor="importance">Importance:</label>
            <input
              // placeholder="Importance"
              defaultValue={this.props.itemToEdit.priority.importance}
              id="importance"
              name="importance"
            />

            <label htmlFor="complexity">Complexity:</label>
            <input
              // placeholder="Complexity"
              defaultValue={this.props.itemToEdit.priority.complexity}
              id="complexity"
              name="complexity"
            />
        </fieldset>
        
        {/* For use with user-defined options */}
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