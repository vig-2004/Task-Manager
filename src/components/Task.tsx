import React from "react";
import "./Task.css";

interface Task {
  title: string;
  description: string;
  dueDate: string;
  onDelete: () => void;
}

const Task = (props: Task) => {
  return (
    <div className="shadow-md border mt-5 border-slate-400 p-3 flex justify-between items-center">
      <div>
        <h2 className="text-base font-bold my-1">{props.title}</h2>
        {/* Displaying Due Date */}
        <p className="text-sm text-slate-500">Due Date: {props.dueDate}</p>
        {/* Displaying Description */}
        <p className="text-sm text-slate-500">
          Description: {props.description}
        </p>
      </div>
      <button
        onClick={props.onDelete} // Call onDelete when button is clicked
        className="deleteTaskButton bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-3 rounded text-sm"
      >
        Delete
      </button>
    </div>
  );
};

export default Task;
