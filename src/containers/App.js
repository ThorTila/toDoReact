import React from 'react';
import uuid from 'uuid';
import style from './App.css';
import Title from '../components/Title';
import TodoList from '../components/TodoList';
import TodoForm from '../components/TodoForm';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data: [
                {text: 'something', id: 2},
                {text: 'written', id: 1},
                {text: 'here', id: 3},
                {text: 'todo', id: 1000}
            ]
        };
    }
    addTodo(val){
        const todo = {
            id: uuid.v4(),
            text: val
        };
        const data = [...this.state.data, todo];
        this.setState({data});
    }
    removeTodo(id) {
        const remainder = this.state.data.filter(todo => todo.id !== id);
        this.setState({data: remainder});
    }
    handleChange(e) {
        if (e.key == 'Enter') {
        e.preventDefault();
        this.addTodo(e.target.value);
        e.target.value = '';
        }
    }
    render() {
        return (
            <div className={style.TodoApp}>
                <Title data={this.state.data}/>
                <TodoForm add={(event) => this.handleChange(event)} submittedText={this.state.data.text}/>
                <TodoList list={this.state.data} remove={(id) => this.removeTodo(id)}/>
            </div>
        );
    }
}


export default App;