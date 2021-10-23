import "./style.css";

const Tasks = ({tasks, hideDone}) => (
    <ul className="tasks__list">
        {tasks.map(task => (
            <li key = {task.id}
            className = {`tasks__item ${task.done && hideDone ? "tasks__item--hidden" : ""}`}
            >
             <button className = "tasks__button tasks__button--done">
            {task.done ? "✔" : ""}
            </button>
            
            <span className ={`tasks__span
            ${task.done ? "tasks__span--done" : ""}`}>{task.content}</span>
            <button className ={`tasks__button tasks__button--remove`}>🗑️</button>
            </li>
        ))}
    </ul>
);

export default Tasks; 