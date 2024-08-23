import { Task } from "../interface/task";

const API = 'http://localhost:3000';

export const createTaskRequest = (task: Task) =>
    fetch(`${API}/task`,{
        method: 'POST',
        body: JSON.stringify(task),
        headers: {
            'Content-Type': 'application/json'
        },
    })
