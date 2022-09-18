import axios from "axios";
const apiUrl = "http://localhost:8080/api/tasks";

export function getTasks() {
  return axios.get(apiUrl);
}

export function addTask(task) {
  return axios.post(apiUrl + "/create", { task });
}

/* CREATE 'PUT' FUNCTIONS */

export function updateTask(task) {
    return axios.put(apiUrl + "/update", { task });
}

/* CREATE 'DELETE' FUNCTIONS */

export function deleteTask(task) {
    return axios.delete(apiUrl + "/delete", { task });
}