import React, {useEffect, useState} from "react";
import Task from "./Task";
import {getTasks} from "../services/taskServices";

const TaskList = () => {
    // FIXME This place holder adds confusion because it (almost) never reflects the real data.
    const [tasks, setTasks] = useState([{task: "test1", _id: 1}, {task: "test2", _id: 2}, {task: "test3", _id: 3},]);

    useEffect(() => {
        try {
            getTasks().then((dbData) => {
                let {data} = dbData;

                setTasks(data);
            });
        } catch (error) {
            console.log(error);
        }
    }, [tasks]);
    // okay, so by updating the tasks in the method that's called when tasks update, we get an infinite loop.
    // presumably the idea is to get a total synchronization from the server, but wouldn't an http stream be better?

    return (<div className='d-flex flex-column align-items-center pt-2'>
        <h1 className='text-center'>Tasks</h1>
        <div>
            {tasks.length ? (tasks.map((task) => <Task key={task._id} task={task}/>)) : (
                <p className='pt-5 text-center'>No Tasks Created</p>)}
        </div>
    </div>);
};

export default TaskList;
