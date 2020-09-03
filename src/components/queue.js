import React, { useState, useEffect } from 'react';
import '../queue.css';

function Task({ task,  index, completeTask, removeTask }) {
    return (
        <div
            className="task"
            style={{ textDecoration: task.completed ? "line-through" : "" }}
        >
            <h2>{task.title}</h2>
            <button style={{ background: "red" }} onClick={() => removeTask(index)}>Remove</button>
            <br></br>
            <p>{task.body}</p>
            
            
            

        </div>
    );
}

function CreateTask({ addTask }) {
    const [value, setValue] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        if (!value) return;
        addTask(value);
        setValue("");
    }
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                className="input"
                value={value}
                placeholder="Add a new section"
                onChange={e => setValue(e.target.value)}
            />
        </form>
    );
}

function Queue(props) {
    const [tasksRemaining, setTasksRemaining] = useState(0);
    const [tasks, setTasks] = useState([
        {
            title: <strong>Your Heading Here</strong>,
            completed: false,
            body: "Information Goes Here"
        }
    ]);

    useEffect(() => { setTasksRemaining(tasks.filter(task => !task.completed).length) });


    const addTask = title => {
        const newTasks = [...tasks, { title, completed: false }];
        setTasks(newTasks);
    };

    const completeTask = index => {
        const newTasks = [...tasks];
        newTasks[index].completed = true;
        setTasks(newTasks);
    };

    const removeTask = index => {
        const newTasks = [...tasks];
        newTasks.splice(index, 1);
        setTasks(newTasks);
    };

    return (
        <div className="queue-container">

            <div className="tasks">
                {tasks.map((task, index) => (
                    <Task
                    task={task}
                    index={index}
                    completeTask={completeTask}
                    removeTask={removeTask}
                    key={index}
                    />
                ))}
            </div>
            <div className="create-task" >
                <CreateTask addTask={addTask} />
            </div>
        </div>
    );
}

export default Queue;