import { useState } from "react";
import { Tag } from "./Tag"

export const TaskForm = ({ setTasks }) => {
    const [taskData, setTaskData] = useState({
        task: "",
        status: "todo",
        tags: []
    })

    const checkTag = (tag) => {
        return taskData.tags.includes(tag);
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setTaskData((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    const selectTag = (tagName) => {
        if (taskData.tags.includes(tagName)) {
            const filterTags = taskData.tags.filter((item) => item !== tagName);
            setTaskData(prev => {
                return { ...prev, tags: filterTags }
            })
        }
        else {
            setTaskData(prev => {
                return { ...prev, tags: [...prev.tags, tagName] }
            })
        }

    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setTasks(prev => {
            return [...prev, taskData]
        })
        setTaskData({
            task: "",
            status: "todo",
            tags: []
        })
    }


    return (
        <header className="container_header">
            <form onSubmit={handleSubmit}>
                <input type="text" className="task_input" placeholder="Add a new task" name="task" value={taskData.task} onChange={handleChange} />

                <div className="task_form_bottom">
                    <div className="">
                        <Tag tag_name="HTML" selectTag={selectTag} selected={checkTag("HTML")} />
                        <Tag tag_name="CSS" selectTag={selectTag} selected={checkTag("CSS")} />
                        <Tag tag_name="JavaScript" selectTag={selectTag} selected={checkTag("JavaScript")} />
                        <Tag tag_name="React" selectTag={selectTag} selected={checkTag("React")} />
                    </div>

                    <div className="">
                        <select className="task_status" name="status" value={taskData.status} onChange={handleChange}>
                            <option value="todo">Todo</option>
                            <option value="inprogress">In progress</option>
                            <option value="done">Done</option>
                        </select>
                        <button type="submit" className="task_submit">+ Add Task</button>
                    </div>
                </div>
            </form>
        </header>
    )
}
