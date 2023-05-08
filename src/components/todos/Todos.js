// cspell: disable
import { useSelector } from "react-redux"
import Todo from "../todo/todo";


const Todos = () => {

    const todos = useSelector((state) => state.todos)

    return (
        <div>
            <ol>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        <Todo todo={todo} />
                    </li>
                ))}
            </ol>
        </div>
    )
}

export default Todos;