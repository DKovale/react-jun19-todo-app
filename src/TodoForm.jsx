import React from 'react';

class TodoForm extends React.Component {
    state = {
        text: ""
    };
    
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

  handleSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit({
            id: Math.random(),
            text: this.state.text,
            complete: false
        });
        this.setState({
            text: ""
        });
    }
    

    render () {
        return (
            <form >
           <input onSubmit = {this.handleSubmit}
                  className="new-todo"
                  name = "text"
                  value = {this.state.text}
                  onChange = {this.handleChange}
                  placeholder="What needs to be done?"
                  autoFocus=""
                />
           <button onClick = {this.handleSubmit}>add todo</button>
            </form>
           ) 
    }

}
 
export default TodoForm;