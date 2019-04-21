import React, { Component } from 'react';
import './App.css';
import List from './components/list/List';
import Graph from './components/graph/Graph';
import EditForm from './components/EditItem';
import CreateForm from './components/CreateItem';

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
    itemToEdit: null,
    renderCreateItem: true
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

  createItem = (newItem) => {
    this.setState(prevState => ({
      items: [...prevState.items, newItem]
    }))
    console.log(this.state.items)
  }

  toggleForm = e => {
    e.preventDefault()
    this.setState(prevState => ({
      itemToEdit: null
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
          this.state.itemToEdit
            ?
              <div>
                <EditForm itemToEdit={this.state.itemToEdit} /> 
                <button onClick={this.toggleForm}>New Task</button>
              </div>
            :
              <CreateForm createItem={this.createItem}/>  
        }
      </div>
    );
  }
}

export default App;
