import { useState } from "react";
import "./App.css";
import { TaskColumn } from "./components/TaskColumn";
import { TaskForm } from "./components/TaskForm";

const App = () => {
  const [tasks, setTasks] = useState([]);

  const handleDelete = (taskIndex) => {
    const newTasks = tasks.filter((task, index) => index !== taskIndex);
    setTasks(newTasks);
  }

  return (
    <div className="container">
      <TaskForm setTasks={setTasks} />
      <main className="container_main">
        <TaskColumn title="Todo" icon={"🎯"} tasks={tasks} status="todo" handleDelete={handleDelete} />
        <TaskColumn title="In progress" icon={"🌟"} tasks={tasks} status="inprogress" handleDelete={handleDelete} />
        <TaskColumn title="Done" icon={"✅"} tasks={tasks} status="done" handleDelete={handleDelete} />
      </main>
    </div>
  )
}

export default App;