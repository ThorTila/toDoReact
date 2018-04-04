import React from 'react';
import style from './components.css';
import Todo from './Todo';

const TodoList = (props) => {
    return (
        <div className={style.TodoList}>
            <h2 className={style.ListTitle}>List:</h2>
            <ul className={style.List}>
                <Todo list={props.list} remove={props.remove}/>
            </ul>
        </div>
    );

};

export default TodoList;