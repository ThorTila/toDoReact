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
            task: '',
            data: [
                {text: 'something', id: 2},
                {text: 'written', id: 1},
                {text: 'here', id: 3},
                {text: 'todo', id: 1000}
            ]
        };
    }

    addTodo(e){
        e.preventDefault();
        if (!this.state.task) {return;}
        const todo = {
            id: uuid.v4(),
            text: this.state.task
        };
        const data = [...this.state.data, todo];
        this.setState({
            data,
            task: ''
        });
    }

    removeTodo(id) {
        const remainder = this.state.data.filter(todo => todo.id !== id);
        this.setState({data: remainder});
    }

    handleChange(e) {
        this.setState ({
            task: e.target.value
        });
    }

    render() {
        return (
            <div className={style.TodoApp}>
                <Title data={this.state.data}/>
                <TodoForm add={(event) => this.addTodo(event)} handle={event => this.handleChange(event)} submittedText={this.state.task}/>
                <TodoList list={this.state.data} remove={(id) => this.removeTodo(id)}/>
            </div>
        );
    }
}

export default App;