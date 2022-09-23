import React, {useState} from "react";
import {addTask} from "../services/taskServices";

const CreateTask = () => {

    let [taskTitle, setTask] = useState('');

    async function submit() {
        // create a new task and send it to the server

        if (taskTitle !== '') {
            await addTask({task: taskTitle});
        }
    }

    /* CREATE 'CreateTask' COMPONENT */
    return (<div>
        <p className='d-flex flex-column align-items-center pt-5'>
            Create Task Component:
        </p>
        <form className='d-flex flex-column align-items-center'>
            <input type="taskTitle" onChange={event => setTask(event.target.value)}
                   placeholder="New task title"/>
            <div className={"py-2"}/>
            <button onClick={submit} type="submit">Create Task
            </button>
        </form>
    </div>);
};

export default CreateTask;
