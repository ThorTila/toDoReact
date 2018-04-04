import React from 'react';
import style from './components.css';

const Todo = (props) => props.list.map((item) => <li className={style.ListItem} key={item.id} onClick={() => props.remove(item.id)}>{item.text}</li>);

export default Todo;