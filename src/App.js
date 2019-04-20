import React, { Component } from 'react';
import './App.css';
import List from './components/list/List';
import Graph from './components/graph/Graph';
import ItemForm from './components/ItemForm'

class App extends Component {
  state = {
    items: [
      {
        id:1,
        name: 'One',
        description: 'Hi',
        priority: {
          importance: 1,
          complexity: 1
        }
      },
      {
        id: 2,
        name: 'Two',
        description: 'Hi',
        priority: {
          importance: 2,
          complexity: 2
        }
      },
      {
        id: 3,
        name: 'Three',
        description: 'Hi',
        priority: {
          importance: 3,
          complexity: 3
        }
      },
      {
        id: 4,
        name:'Four',
        description: 'Hi',
        priority: {
          importance: 4,
          complexity: 4
        }
      },
      {
        id: 5,
        name: 'Five',
        description: 'Hi',
        priority: {
          importance: 5,
          complexity: 5
        }
      }],
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

        <Graph setEditItem={this.setEditItem} items={this.state.items} />
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
