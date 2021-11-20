import { List, Item, TaskContent, Button } from "./styled";

const Tasks = ({ tasks, hideDone, removeTask, toggleTaskDone }) => (
    <List>
        {tasks.map(task => (
            <Item
                key={task.id}
                hidden={task.done && hideDone}
            >
                <Button
                    onClick={() => toggleTaskDone(task.id)}
                    toggleDone
                >
                    {task.done ? "✔" : ""}
                </Button>

                <TaskContent
                    done={task.done}
                >
                    {task.content}
                </TaskContent>
                <Button
                    onClick={() => removeTask(task.id)}
                    remove
                >
                    🗑️
                </Button>
            </Item>
        ))}
    </List>
);

export default Tasks;