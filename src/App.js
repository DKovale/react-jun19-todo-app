import React from 'react';
import TodoLi from './TodoLi';
import TodoForm from './TodoForm';

class App extends React.Component {

  state = {
    todos: [],
    todoToShow: "all"
  }

  addTodo = (todo) => {
    const newTodos = [todo, ...this.state.todos];
    this.setState ({
      todos: newTodos
    })
  }

  toggleComplete = (id) => {
    this.setState ({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
         //   id: todo.id,
         //   text: todo.text,
           return {
            ...todo,
            complete: !todo.complete 
           };
        } else {
          return todo;
        }
      })
    })
  }

updateTodoToShow = (s) => {
  this.setState({
    todoToShow: s
  })
}

handleDelete = (id) => {
  this.setState({
    todos: this.state.todos.filter(todo => todo.id !==id)
  });
}

 render () {
    let todos = [];
    if (this.state.todoToShow === "all") {
      todos = this.state.todos;
    } else if (this.state.todoToShow === "active") {
        todos = this.state.todos.filter(x => !x.complete);
    } else if (this.state.todoToShow === "complete") {
      todos = this.state.todos.filter(x => x.complete);
  }

  return (
    <section className="todoapp">
      <header className="header">
        <h1>todos</h1>
        <TodoForm onSubmit = {this.addTodo} />
      </header>
      <section className="main" style={{ display: 'block' }}>
      <input id="toggle-all" className="toggle-all" type="checkbox" />
        <label htmlFor="toggle-all">Mark all as complete</label>
        <ul className="todo-list">
      {todos.map(todo => (
        <TodoLi
          key = {todo.id}
          onDelete = {() => this.handleDelete(todo.id)}
          toggleComplete = {() => this.toggleComplete(todo.id)}
          todo = {todo} />
      ))} 
      </ul>
      </section>
      <footer className="footer" style={{ display: 'block' }}>
      <span className="todo-count">
        {this.state.todos.filter(x => !x.complete).length} items left
      </span>
      <div>
          <button className="selected" onClick = {() => this.updateTodoToShow("all")}>all</button>
          <button onClick = {() => this.updateTodoToShow("active")}>active</button>
          <button onClick = {() => this.updateTodoToShow("complete")}>complete</button>
   </div> 
   <button className="clear-completed" style={{ display: 'block' }}></button>
    </footer>
    </section>
    /*  <header className="header">
        <h1>todos App</h1>

        <input
          className="new-todo"
          placeholder="What needs to be done?"
          autoFocus=""
        />
      </header>  
      <section className="main" style={{ display: 'block' }}>
        <input id="toggle-all" className="toggle-all" type="checkbox" />
        <label htmlFor="toggle-all">Mark all as complete</label>
     </section>  
      <footer className="footer" style={{ display: 'block' }}>
        <span className="todo-count"><strong>3</strong> items left</span>
        <ul className="filters">
          <li>
            <a href="#/" className="selected">All</a>
          </li>
          <li>
            <a href="#/active">Active</a>
          </li>
          <li>
            <a href="#/completed">Completed</a>
          </li>
        </ul>
        <button className="clear-completed" style={{ display: 'block' }}></button>
      </footer>
    </section>*/

  );
}
}
export default App;
