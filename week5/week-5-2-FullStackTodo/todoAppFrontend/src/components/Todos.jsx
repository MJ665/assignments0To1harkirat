export function Todos({ todos }) {
    return (
        <div>
            {todos.map(function (todo) {
                return (
                    <div key={todo._id}> {/* Added key prop for React list rendering */}
                        <h1>{todo.title}</h1> {/* Changed element.title to todo.title */}
                        <h1>{todo.description}</h1> {/* Changed element.description to todo.description */}
                        {/* Fixed the comparison operator from element.completed to todo.completed */}
                        <h1>{todo.completed === true ? "Completed" : "Mark as Completed"}</h1>
                    </div>
                );
            })}
        </div>
    );
}
