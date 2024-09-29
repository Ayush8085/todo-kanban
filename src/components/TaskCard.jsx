import { Tag } from "./Tag"


export const TaskCard = ({ title, tags, handleDelete, index, setActiveCard }) => {
    return (
        <article className="task_card" draggable onDragStart={() => setActiveCard(index)} onDragEnd={() => setActiveCard(null)}>
            <p className="task_text">{title}</p>

            <div className="task_card_bottom">
                <div className="task_card_tags">
                    {tags.map((tag, index) => <Tag key={index} tag_name={tag} selected />)}
                </div>
                <div className="task_delete" onClick={() => handleDelete(index)}>🗑️</div>
            </div>
        </article>
    )
}
