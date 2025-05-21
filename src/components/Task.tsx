import React from "react";
import "./Task.css";

interface Task {
  title: string;
}

class Task extends React.Component<Task> {
  render() {
    return (
      <div className="TaskItem shadow-md border border-slate-100">
        <h2 className="text-base font-bold my-1">{this.props.title}</h2>
        <p className="text-sm text-slate-500">Due Date:</p>
        <p className="text-sm text-slate-500">Description:</p>
      </div>
    );
  }
}

export default Task;
