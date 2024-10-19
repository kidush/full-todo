export default function Task({ task }) {
  return (
    <div>
      <p className="my-5">
        <strong className="block font-medium mb-1">Name:</strong>
        {task.name?.toString()}
      </p>
      <p className="my-5">
        <strong className="block font-medium mb-1">Description:</strong>
        {task.description?.toString()}
      </p>
      <p className="my-5">
        <strong className="block font-medium mb-1">Status:</strong>
        {task.status?.toString()}
      </p>
    </div>
  )
}
