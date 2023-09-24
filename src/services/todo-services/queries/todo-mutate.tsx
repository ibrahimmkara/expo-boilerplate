import { useMutation } from "@tanstack/react-query";
import useInterceptor from "$src/hooks/use-interceptor";
import { getTodoList, addTodoList } from "../services/todo-services";

export const useAddTodo = () => {
  const api = useInterceptor();

  const service = (body: any) => addTodoList(api, body);
  return useMutation(service);
};

export const useTodoList = () => {
  const api = useInterceptor();
  const service = (body: any) => getTodoList(api, body);
  return useMutation(service);
};
