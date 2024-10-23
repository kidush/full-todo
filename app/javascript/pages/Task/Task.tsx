import { Link } from "@inertiajs/react";
import { Task } from "../Types/Task";

type TaskItemProps = {
  task: Task;
}

export default function TaskItem({ task }: TaskItemProps) {
  return (
    <div className="flex items-center grow">
      <input id="todo1" name="todo1" type="checkbox"
        className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded" />
      <label className="my-5 ml-3 block text-gray-900 grow">
        {task.name?.toString()}
      </label>

      <Link
        href={`/tasks/${task.id}`}
        className="rounded-lg py-2 px-4 block bg-gray-100 items-center"
      >

        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
          <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
          <path fillRule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 0 1 0-1.113ZM17.25 12a5.25 5.25 0 1 1-10.5 0 5.25 5.25 0 0 1 10.5 0Z" clipRule="evenodd" />
        </svg>
      </Link>
    </div>
  )
}
