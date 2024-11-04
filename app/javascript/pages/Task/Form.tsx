import { useForm } from "@inertiajs/react";
import { ReactNode } from "react";
import { TaskForm } from "../Types/TaskForm";

export default function Form({ task, onSubmit, submitText }: TaskForm) {
  const form = useForm({
    name: task.name || "",
    description: task.description || "",
    status: task.status || "",
  });
  const { data, setData, errors, processing } = form;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(form);
  };

  const fillSelect = (taskStatus: string): ReactNode => {
    return ["pending", "complete"].map((option, index) => {
      console.log(taskStatus);
      return (
        <option
          key={index}
          value={option}
          selected={option === taskStatus ? true : false}
        >
          {option}
        </option>
      );
    });
  };

  return (
    <form onSubmit={handleSubmit} className="contents">
      <div className="my-5">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          value={data.name}
          className="block shadow rounded-md border border-gray-400 outline-none px-3 py-2 mt-2 w-full"
          onChange={(e) => setData("name", e.target.value)}
        />
        {errors.name && (
          <div className="text-red-500 px-3 py-2 font-medium">
            {errors.name.join(", ")}
          </div>
        )}
      </div>

      <div className="my-5">
        <label htmlFor="description">Description</label>
        <textarea
          name="description"
          id="description"
          value={data.description}
          rows="4"
          className="block shadow rounded-md border border-gray-400 outline-none px-3 py-2 mt-2 w-full"
          onChange={(e) => setData("description", e.target.value)}
        />
        {errors.description && (
          <div className="text-red-500 px-3 py-2 font-medium">
            {errors.description.join(", ")}
          </div>
        )}
      </div>

      <div className="my-5">
        <label htmlFor="status">Status</label>
        <select
          id="status"
          name="status"
          className="block shadow rounded-md border border-gray-400 outline-none px-3 py-2 mt-2 w-full"
          onChange={(e) => setData("status", e.target.value)}
        >
          {fillSelect(data.status)}
        </select>
        {errors.status && (
          <div className="text-red-500 px-3 py-2 font-medium">
            {errors.status.join(", ")}
          </div>
        )}
      </div>

      <div className="inline">
        <button
          type="submit"
          disabled={processing}
          className="rounded-lg py-3 px-5 bg-blue-600 text-white inline-block font-medium cursor-pointer"
        >
          {submitText}
        </button>
      </div>
    </form>
  );
}
