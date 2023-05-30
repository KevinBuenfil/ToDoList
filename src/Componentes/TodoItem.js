const TodoItem = ({ item, index, deleteTodoItem, completeTodoItem, 
    updateTodoItem }) => {
    return (
        <div className="todo-list">
            <li style={{textDecoration: item.complete ? "line-through" : ""}}>
            {item.todo}</li>
            <div className="btns">
                <button onClick={() => completeTodoItem(index)}>Completada</button>
                <button onClick={() => updateTodoItem(index)}>Modificar</button>
                <button onClick={() => deleteTodoItem(index)}>Eliminar</button>
            </div>
        </div>)
};
export default TodoItem;
