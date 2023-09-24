import { AxiosInstance } from "axios";
import { TODO_GET_URL, TODO_POST_URL } from "../constants/todo-services-urls";

export function getTodoList(axios: AxiosInstance, body: { projectId: number }) {
  return axios.get<any>(TODO_GET_URL, { params: body });
}

export function addTodoList(axios: AxiosInstance, body: { projectId: number }) {
  return axios.post<any>(TODO_POST_URL,body);
}
