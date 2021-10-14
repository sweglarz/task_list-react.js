import "./style.css";

const Tasks = ({tasks, hideDoneTasks}) => (
    <ul className="section__list">
        {tasks.map(task => (
            <li key = {task.id}
            className = {`section__item ${task.done && hideDoneTasks ? "section__item--hidden" : ""}`}
            >
             <button className = "section__button section__button--done">
            {task.done ? "✔" : ""}
            </button>
            
            <span className ={`section__span
            ${task.done ? "section__span--done" : ""}`}>{task.content}</span>
            <button className ={`section__button section__button--remove`}>🗑️</button>
            </li>
        ))}
    </ul>
);

export default Tasks; 