import React from 'react';
import style from './components.css';

const TodoForm = (props) => {
    return (
        <form className={style.TodoForm} onSubmit={(e) => props.add(e)}>
            <label className={style.FormLabel}>Add something to do:</label>
            <input className={style.FormInput} autoFocus type="text" onChange={(e) => props.handle(e)} value={props.submittedText}/>
            <button className={style.FormButton} type="submit">Add task</button>
        </form>
    );
}

export default TodoForm;