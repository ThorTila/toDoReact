import React from 'react';
import style from './components.css';

class TodoList extends React.Component {
    render() {
        const TodoList = this.props.list.map((item) => <li className={style.ListItem} key={item.id}>{item.text}</li>);
        return (
            <div className={style.TodoList}>
                <h2 className={style.ListTitle}>List:</h2>
                <ul className={style.List}>
                    {TodoList}
                </ul>
            </div>
        );
    }
}

export default TodoList;