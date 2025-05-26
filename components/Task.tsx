import "./Task.css";
import { TaskItem } from "../types";

interface TaskProps {
  item: TaskItem;
  removeTask: (task: TaskItem) => void;
}

const Task = (props: TaskProps) => {
  const { item, removeTask } = props;
  return (
    <div className="TaskItem shadow-md border border-slate-100">
      <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
        <div>
          <a href={`/tasks/${item.id || ""}`}>
            <h2 className="text-base font-bold my-1">{item.title}</h2>
          </a>
          <p className="text-sm text-slate-500">Due Date : {item.dueDate}</p>
          <p className="text-sm text-slate-500">
            Description: {item.description}
          </p>
        </div>

        <button
          className="deleteTaskButton cursor-pointer flex items-center bg-red-500 p-3 text-white justify-center h-4 w-4 rounded-sm my-5 mr-7"
          onClick={() => removeTask(item)}
        >
          X
        </button>
      </div>
    </div>
  );
};

export default Task;
