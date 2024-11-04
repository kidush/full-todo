import { Task } from "./Task";

export type TaskForm = {
  task: Task;
  onSubmit: Function;
  submitText: string;
};
