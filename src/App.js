import React, { Component } from 'react';
import './App.css';
import List from './components/list/List';
import Graph from './components/graph/Graph';
import ItemForm from './components/ItemForm'

class App extends Component {
  state = {
    items: [{id:1, name: 'One'}, {id: 2, name: 'Two'}, {id: 3, name: 'Three'}, {id: 4, name:'Four'}, {id: 5, name: 'Five'}],
    itemToEdit: null
  }

  getItemById = id => {
    let currentItem = this.state.items.find(item => 
      item.id === Number(id)
    )
    return currentItem
  }

  setEditItem = e => {
    let id = e.target.id
    let item = this.getItemById(id)

    this.setState(prevState => ({
      itemToEdit: item
    }))
  }

  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}

        {/* <Graph setEditItem={this.setEditItem} items={this.state.items} /> */}
        <List setEditItem={this.setEditItem} items={this.state.items} />
        {
          this.state.itemToEdit &&
          <ItemForm itemToEdit={this.state.itemToEdit}/>
        }
      </div>
    );
  }
}

export default App;
