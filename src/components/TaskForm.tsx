import React from "react";
import { TaskItem } from "../types";

interface TaskFormProps {
  addTask: (task: TaskItem) => void;
}
interface TaskFormState {
  title: string;
}

class TaskForm extends React.Component<TaskFormProps, TaskFormState> {
  constructor(props: TaskFormProps) {
    super(props);
    this.state = {
      title: "",
    };
  }

  addTask: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const newTask = {
      title: this.state.title,
    };
    this.props.addTask(newTask);
    this.setState({ title: "" });
  };

  titleChanged: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    console.log(`Title Changed to ${e.target.value}`);
    this.setState({ title: e.target.value });
  };

  render() {
    return (
      <form onSubmit={this.addTask}>
        <input
          type="text"
          placeholder="Enter Task"
          value={this.state.title}
          className="border "
          onChange={this.titleChanged}
        />
        <button type="submit" className="border ">
          Add Item
        </button>
      </form>
    );
  }
}

export default TaskForm;
