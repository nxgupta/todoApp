const TodoList = ({ todos, deleteTodo }) => {
    return (
            todos?.length > 0 ? (
                <div className="todoList">
                    {todos.map((todo, index) => (
                        <div className="todoItem" key={index}>{todo}
                            <button className="btn btn-delete" onClick={() => deleteTodo(todo)}>Delete</button>
                        </div>
                    ))}
                </div>
            ):(<p className="empty">No task found</p>))
}
export default TodoList