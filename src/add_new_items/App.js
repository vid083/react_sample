import React from "react";

const ToDo = props => (
    <tr>
      <td>
        <label>{props.id}</label>
      </td>
      <td>
        <input placeholder="name"/>
      </td>
      <td>

      </td>
    </tr>
  );
  
  class App extends React.Component {
    constructor() {
      super();
      
      const toDoCounter = 1;
      this.state = {
        list: [
          {
            id: toDoCounter,
            
          },
        ],
        toDoCounter: toDoCounter,
      };
    }
  
    
  
    addToEnd() {
     
      const nextId = this.state.toDoCounter + 1;
      const newList = [
        ...this.state.list,
        {id: nextId,},
      ];
      this.setState({
        list: newList,
        toDoCounter: nextId,
      });
    }
  
    
  
    render() {
      return (
        <div>
          <h2>Employee ID and Names</h2>
          <table>
            <tr>
              <th>ID</th>
              <th>NAME</th>
            </tr>
            {this.state.list.map((todo, index) => (
              <ToDo key={todo.id} {...todo} />
            ))}
          </table><br/>
          <button onClick={this.addToEnd.bind(this)}>
            Add
          </button>
        </div>
      );
    }
  }
  
  export default App;