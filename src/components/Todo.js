import React from 'react';
import style from './components.css';

const Todo = (props) => props.list.map(({id, text}) => <li className={style.ListItem} key={id} onClick={() => props.remove(id)}>{text}</li>);

export default Todo;