import React from 'react';


class App extends React.Component {
  state = {
    inputValue: '',
  };

  componentDidMount() {
    console.log(this.props.todos);
  };

  handleInputChange = (event) => {
    this.setState({ inputValue: event.target.value });
  };

  handleAddTodo = () => {
    const { inputValue } = this.state;
    if (inputValue.trim()) {
      this.props.addTodo(inputValue);
      this.setState({ inputValue: '' });
      //setTimeout(() => {console.log(this.props.todos)}, 1000);
    }
  };

  handleDeleteTodo = (id) => {
    this.props.deleteTodo(id);
  };

  handleToggleTodo = (id) => {
    this.props.toggleTodo(id);
  };

  render() {
    const { todos } = this.props;
    const { inputValue } = this.state;
    
    return (
      <div>
        <h1>Todo App</h1>
        <div>
          <input
            type="text"
            value={inputValue}
            onChange={this.handleInputChange}
          />
          <button onClick={this.handleAddTodo}>Add Todo</button>
        </div>
        <ul>
          {todos && todos.map((todo) => (
            <li key={todo.id}>
              <span
                style={{
                  textDecoration: todo.completed ? 'line-through' : 'none',
                }}
                onClick={() => this.handleToggleTodo(todo.id)}
              >
                {todo.text}
              </span>
              <button onClick={() => this.handleDeleteTodo(todo.id)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}


export default App;
