import React from "react";
import { BsCheckCircleFill, BsCheckCircle } from "react-icons/bs";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";

const Todo = ({ text, completed, updateMode, completToDo, deleteToDo }) => {
  return (
    <div className=" py-5 [&>*]:my-1">
      <div className="bg-black text-white flex item-center justify-between mx-5 px-2 py-2 rounded-xl ">
        <div
          className={`flex cursor-pointer  items-center [&>*]:mx-2 ${
            completed ? " line-through" : ""
          }`}
        >
          {completed ? (
            <BsCheckCircleFill onClick={completToDo} />
          ) : (
            <BsCheckCircle onClick={completToDo} />
          )}
          <div className="">{text}</div>
        </div>
        <div className="flex  [&>*]:mx-2">
          <AiFillEdit className="cursor-pointer" onClick={updateMode} />
          <AiFillDelete className="cursor-pointer" onClick={deleteToDo} />
        </div>
      </div>
    </div>
  );
};

export default Todo;
