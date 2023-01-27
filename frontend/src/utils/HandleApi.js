import axios from "axios";

const baseUrl = "http://localhost:5001/api/todo";

const getAllToDo = (setTodo) => {
  axios.get(baseUrl).then(({ data }) => {
    setTodo(data);
  });
};

const addToDo = (text, setText, setTodo) => {
  axios.post(`${baseUrl}/`, { text }).then(() => {
    setText("");
    getAllToDo(setTodo);
  });
};

const updateToDo = (setTodo, setIsUpdating, toDoId, text, setText) => {
  const id = toDoId;
  axios.put(`${baseUrl}/${id}`, { text: text }).then(() => {
    setText("");
    setIsUpdating(false);
    getAllToDo(setTodo);
  });
};

const completToDo = (_id, setTodo) => {
  const id = _id;
  axios.put(`${baseUrl}/completed/${id}`).then(() => {
    getAllToDo(setTodo);
  });
};

const deleteToDo = (_id, setTodo) => {
  axios.delete(`${baseUrl}/${_id}`).then(() => {
    getAllToDo(setTodo);
  });
};

export { getAllToDo, addToDo, updateToDo, completToDo, deleteToDo };
