import { useState, useEffect } from "react";

export const useTasks = () => {

    const getSavedTasks = () => JSON.parse(localStorage.getItem("tasks")) || [];
    const [tasks, setTasks] = useState(getSavedTasks);

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);
    

    const removeTask = (id) => {
        setTasks(tasks => tasks.filter(task => task.id !== id))
    };

    const toggleTaskDone = (id) => {
        setTasks(tasks => tasks.map(task => {
            if (task.id === id) {
                return {
                    ...task, done: !task.done
                }
            } return task;
        }));
    };

    const setAllDone = () => {
        setTasks(tasks => tasks.map(task => ({
            ...task,
            done: true,
        })));
    };

    const addNewTask = (content) => {
        if (content !== "") {
            setTasks(tasks => [
                ...tasks,
                {
                    content,
                    done: false,
                    id: tasks.length ? tasks[tasks.length - 1].id + 1 : 1,
                },
            ]);
        } return;
    };
    return {tasks, removeTask, toggleTaskDone, setAllDone, addNewTask}
}; 