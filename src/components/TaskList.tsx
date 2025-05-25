import Task from "./Task";
import { TaskItem } from "../types";

interface Props {
  tasks: TaskItem[];
  deleteTask: (index: number) => void;
}

const TaskList = (props: Props) => {
  const list = props.tasks.map((task, idx) => (
    <li key={idx}>
      <Task
        title={task.title}
        description={task.description}
        dueDate={task.dueDate}
        onDelete={() => props.deleteTask(idx)} // Pass onDelete handler with task index
      />
    </li>
  ));
  return <ul className="mt-5">{list}</ul>;
};

export default TaskList;
