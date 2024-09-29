import { useState } from "react";
import "./App.css";
import { TaskColumn } from "./components/TaskColumn";
import { TaskForm } from "./components/TaskForm";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [activeCard, setActiveCard] = useState(null);

  const handleDelete = (taskIndex) => {
    const newTasks = tasks.filter((task, index) => index !== taskIndex);
    setTasks(newTasks);
  }

  const onDrop = (status, position) => {
    console.log(`${activeCard} is going to be placed into ${status} and at the position(index) ${position}`);

    if (activeCard === null || activeCard === undefined) return;

    const taskToMove = tasks[activeCard];
    const updatedTasks = tasks.filter((task, index) => index !== activeCard);

    updatedTasks.splice(position, 0, {
      ...taskToMove,
      status: status
    })

    setTasks(updatedTasks);
  }

  return (
    <div className="container">
      <TaskForm setTasks={setTasks} />
      <main className="container_main">
        <TaskColumn title="Todo" icon={"🎯"} tasks={tasks} status="todo" handleDelete={handleDelete} setActiveCard={setActiveCard} onDrop={onDrop} />
        <TaskColumn title="In progress" icon={"🌟"} tasks={tasks} status="inprogress" handleDelete={handleDelete} setActiveCard={setActiveCard} onDrop={onDrop} />
        <TaskColumn title="Done" icon={"✅"} tasks={tasks} status="done" handleDelete={handleDelete} setActiveCard={setActiveCard} onDrop={onDrop} />
      </main>
    </div>
  )
}

export default App;