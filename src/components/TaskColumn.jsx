import { TaskCard } from "./TaskCard"

export const TaskColumn = ({ title, icon, tasks, status, handleDelete }) => {
    return (
        <section className="task_column">
            <h2 className="task_column_heading">
                {icon}
                {title}
            </h2>

            {tasks.map((task, index) => (
                task.status === status && <TaskCard key={index} title={task.task} tags={task.tags} handleDelete={handleDelete} index={index} />
            ))}
        </section>
    )
}
