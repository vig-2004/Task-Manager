// src/components/TaskApp.tsx
import React, { useEffect } from "react";
import { TaskItem } from "../types";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";

import { useLocalStorage } from "../hooks/useLocalStorage";

interface taskAppState {
  tasks: TaskItem[];
}

const TaskApp = () => {
  // --- Use useLocalStorage to manage taskAppState ---
  const [taskAppState, setTaskAppState] = useLocalStorage<taskAppState>(
    "tasks",
    {
      tasks: [],
    }
  );

  const addTask = (task: TaskItem) => {
    setTaskAppState({ tasks: [...taskAppState.tasks, task] });
  };

  const removeTask = (taskToRemove: TaskItem) => {
    setTaskAppState((prevState) => ({
      tasks: prevState.tasks.filter((task) => task.id !== taskToRemove.id),
    }));
  };

  React.useEffect(() => {
    const id = setTimeout(() => {
      // console.log(`Saved ${taskAppState.tasks.length} items to backend...`);
    }, 5000);
    return () => {
      // console.log("clear or cancel any existing network call");
      clearTimeout(id);
    };
  }, [taskAppState.tasks]);

  return (
    <div className="container py-10 max-w-7xl mx-auto">
      <h1 className="text-3xl mb-2 font-bold text-slate-700">Smarter Tasks</h1>
      <h1 className="text-lg mb-6 text-slate-600">
        <span className="font-bold">Project: </span>
        Graduation Final Year Project (CMRTC college website)
      </h1>
      <div className="grid grid-cols-2 gap-4">
        <div className="border border-slate-200 rounded-xl p-4">
          <h1 className="text-slate-500 text-xl font-bold text-center mb-4">
            Pending
          </h1>
          <TaskForm addTask={addTask} />
          <TaskList tasks={taskAppState.tasks} removeTask={removeTask} />
        </div>
      </div>
    </div>
  );
};

export default TaskApp;
