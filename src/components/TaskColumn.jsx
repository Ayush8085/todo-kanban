import React from "react"
import { DropArea } from "./DropArea"
import { TaskCard } from "./TaskCard"

export const TaskColumn = ({ title, icon, tasks, status, handleDelete, setActiveCard, onDrop }) => {
    return (
        <section className="task_column">
            <h2 className="task_column_heading">
                {icon}
                {title}
            </h2>

            <DropArea onDrop={() => onDrop(status, 0)} />

            {tasks.map((task, index) => (
                task.status === status &&
                <React.Fragment key={index}>
                    <TaskCard key={index} title={task.task} tags={task.tags} handleDelete={handleDelete} index={index} setActiveCard={setActiveCard} />
                    <DropArea onDrop={() => onDrop(status, index + 1)} />
                </React.Fragment>
            ))}
        </section>
    )
}
