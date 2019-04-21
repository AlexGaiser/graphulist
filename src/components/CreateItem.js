import React, { Component } from 'react'

class CreateForm extends Component {
  state = {
    maxComplexity: null,
    name: '',
    description: '',
    importance: null,
    complexity: null
  }

  handleChange = e => {
    let key = e.target.name
    let val = e.target.value
    this.setState(prevState => ({
      [key]: val
    }))
  }

  handleSubmit = e => {
    e.preventDefault()
    let item = {
      id: 'needs logic to ensure unique',
      name: this.state.name,
      description: this.state.description,
      priority: {
        importance: this.state.importance,
        complexity: this.state.complexity
      }
    }
    console.log(item)

    return item
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
    return (
      <div className="form-container">
        {/* <label htmlFor="name">Name:</label> */}
        <input
          name="name"
          type="text"
          placeholder="Name"
          onChange={this.handleChange}
        />

        {/* <label htmlFor="description">Description:</label> */}
        <input
          name="description"
          type="text"
          placeholder="Description"
          onChange={this.handleChange}
        />

        <fieldset>
          <legend>Priority</legend>
            {/* <label htmlFor="importance">Importance:</label> */}
            <input
              placeholder="Importance"
              id="importance"
              name="importance"
              onChange={this.handleChange}
            />

            {/* <label htmlFor="complexity">Complexity:</label> */}
            <input
              placeholder="Complexity"
              id="complexity"
              name="complexity"
              onChange={this.handleChange}
            />
        </fieldset>
      
        <button 
          onClick={(e)=> {
                let item = this.handleSubmit(e)
                this.props.createItem(item)
          }} type='button'
          >Create Task
        </button>
        
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
 
export default CreateForm;