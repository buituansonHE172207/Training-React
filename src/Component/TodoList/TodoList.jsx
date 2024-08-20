import { useState } from "react";
import Styles from "./TodoList.module.css";

function TodoList() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    function handleInputChange(event) {
        setNewTask(event.target.value);
    }

    function handleAddNewTask() {
        if (newTask === "") {
            return;
        }
        setTasks((prevTasks) => [...prevTasks, newTask]);
    }

    function handleRemoveTask(index) {
        setTasks((prevTasks) => prevTasks.filter((_, i) => i !== index))
    }

    function handleMoveTaskUp(index) {
        if (index === 0) {
            return;
        }
        setTasks((prevTasks) => {
            const newTasks = [...prevTasks];
            const temp = newTasks[index];
            newTasks[index] = newTasks[index - 1];
            newTasks[index - 1] = temp;
            return newTasks;
        });
    }

    function handleMoveTaskDown(index) {
        if (index === tasks.length - 1) {
            return;
        }
        setTasks((prevTasks) => {
            const newTasks = [...prevTasks];
            const temp = newTasks[index];
            newTasks[index] = newTasks[index + 1];
            newTasks[index + 1] = temp;
            return newTasks;
        });
    }

    return (
        <>
            <h1>Todo List</h1>
            <div className={Styles.container}>
                <div className={Styles.inputContainer}>
                    <input
                        type="text"
                        value={newTask}
                        onChange={handleInputChange}
                        placeholder="Enter new task"
                    />
                    <button onClick={handleAddNewTask}>Add</button>
                </div>
                <ul className={Styles.taskList}>
                    {tasks.map((task, index) => (
                        <li key={index}>
                            {task}
                            <div>
                                <button onClick={() => handleRemoveTask(index)}>Remove</button>
                                <button onClick={() => handleMoveTaskUp(index)}>Up</button>
                                <button onClick={() => handleMoveTaskDown(index)}>Down</button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )

}

export default TodoList;

