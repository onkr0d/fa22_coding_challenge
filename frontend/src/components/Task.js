import React from "react";
import {updateTask, deleteTask} from "../services/taskServices";

const Task = ({task}) => {
    /* CREATE UPDATE OPERATION */

    function updateTaskWrapper() {
        updateTask(task);
    }

    /* CREATE DELETE OPERATION*/
    function deleteTaskWrapper() {
        deleteTask(task);
    }

    return (
        <div className='pb-3 pt-1'>
            <p className='text-center'>{`${task.task}`}</p>
            <div>
                <button onClick={deleteTaskWrapper}>DELETE</button>
                <button onClick={updateTaskWrapper}>UPDATE</button>
            </div>
        </div>
    );
};

export default Task;
