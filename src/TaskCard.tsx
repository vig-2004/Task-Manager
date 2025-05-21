import React from "react";
import "./TaskCard.css";
const TaskCard = (props) => {
  let x = "Due on: " + props.dueDate;
  if (!props.dueDate) {
    x = "Completed on: " + props.completedAtDate;
  }
  return (
    <div className="TaskItem">
      <h1 className="text-m font-bold">{props.title}</h1>
      <p>{x}</p>
      <p>assignee : {props.assigneeName}</p>
    </div>
  );
};
export default TaskCard;
