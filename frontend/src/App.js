import { useEffect, useState } from "react";
import Todo from "./components/Todo";
import {
  addToDo,
  getAllToDo,
  deleteToDo,
  updateToDo,
  completToDo,
} from "./utils/HandleApi";

function App() {
  const [todo, setTodo] = useState([]);
  const [text, setText] = useState("");
  const [updating, setIsUpdating] = useState(false);
  const [toDoId, setToDoId] = useState("");

  useEffect(() => {
    getAllToDo(setTodo);
  }, []);

  const AddsubmitHandler = (event) => {
    event.preventDefault();
    addToDo(text, setText, setTodo);
  };

  const UpdatesubmitHandler = (event) => {
    event.preventDefault();
    updateToDo(setTodo, setIsUpdating, toDoId, text, setText);
  };

  const updateMode = (_id, text) => {
    setIsUpdating(true);
    setText(text);
    setToDoId(_id);
  };

  return (
    <>
      <div className="bg-gray-300 min-h-[100vh]">
        <h1 className="text-center font-bold text-xl">To Do App</h1>
        <form
          className="bg-[#FF0 000] mx-5 py-2 sticky flex top-0 justify-between rounded-xl"
          onSubmit={updating ? UpdatesubmitHandler : AddsubmitHandler}
        >
          <input
            className="px-2 mx-2 outline-none w-[90%] rounded-lg"
            placeholder="Text Here..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button className="bg-black px-4 rounded-xl py-2 [#FF0000] text-white px-2 font-bold">
            {updating ? "Update" : "Add"}
          </button>
        </form>
        {todo.map((item) => (
          <Todo
            key={item._id}
            text={item.text}
            completed={item.completed}
            updateMode={() => updateMode(item._id, item.text)}
            completToDo={() => completToDo(item._id, setTodo)}
            deleteToDo={() => deleteToDo(item._id, setTodo)}
          />
        ))}
      </div>
    </>
  );
}

export default App;
