import React from 'react';
import style from './components.css';

const TodoForm = (props) => {
    return (
        <form>
            <label>Add something to do:</label>
            <input autoFocus type="text" onKeyPress={(e) => props.add(e)} value={props.submittedText}/>
        </form>
    );
}

export default TodoForm;