import {atom} from "recoil";
import { TODO_KEY } from "../constants/store-key";


export const todoAtom = atom<{
  data: any | null;
  status: "done" | "wait" | "server";
}>({
  key: TODO_KEY,
  default: {
    data: null,
    status: "wait",
  },
});