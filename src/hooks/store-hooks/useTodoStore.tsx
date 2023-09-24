import { useRecoilState } from "recoil";
import { todoAtom } from "$src/store/atoms/todo-atoms";

export const useAuthStore = () => {
  const [{ data, status }, setTodoState] = useRecoilState(todoAtom);

  const setUnTodo = () => {
    setTodoState((prev) => ({
      ...prev,
      data: null,
      status: "done",
    }));
  };

  const setTodo = (_data: any) => {
    setTodoState((prev) => ({
      ...prev,
      data: _data,
      status: "done",
    }));
  };

  return {
    setTodo,
    setUnTodo,
    status,
    data,
  };
};
