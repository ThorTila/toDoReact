import React from 'react';
import style from './components.css';

const Title = (props) => <h1 className={style.TodoTitle}>To Do: {props.data.length}</h1>

export default Title;