// src/components/TaskList.tsx
import Task from "./Task";
import { TaskItem } from "../types";

interface Props {
  tasks: TaskItem[];
  removeTask: (task: TaskItem) => void;
}

const TaskList = (props: Props) => {
  const list = props.tasks.map((task) => (
    <li key={task.id}>
      <Task item={task} removeTask={props.removeTask} />
    </li>
  ));
  return <ul className="mt-5">{list}</ul>;
};

export default TaskList;
