import { useState } from "react"
import { useDispatch } from "react-redux";
import { addTodo } from "../../reducer/todoSlice";


const AddTodo = () => {
    const [text, setText] = useState("");
    const dispatch = useDispatch();

    const addTodoHandler = (e) => {
        e.preventDefault();
        if(e.target[0].value !== " "){
            dispatch(addTodo(text));
        setText(" ");
        }else{
            alert("Please add a valid todo")
        }
        
    }

    return (
        <form onSubmit={addTodoHandler}>
            <input
                type='text'
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <button>Add todo</button>
        </form>
    )
}

export default AddTodo;