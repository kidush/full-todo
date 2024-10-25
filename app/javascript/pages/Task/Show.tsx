import { Link, Head } from '@inertiajs/react'
import TaskItem from './TaskItem'

export default function Show({ task, flash }) {
  const onDestroy = (e) => {
    if (!confirm('Are you sure you want to delete this task?')) {
      e.preventDefault()
    }
  }

  return (
    <>
      <Head title={`Task #${task.id}`} />

      <div className="mx-auto md:w-2/3 w-full px-8 pt-8">
        <div className="mx-auto">
          {flash.notice && (
            <p className="py-2 px-3 bg-green-50 mb-5 text-green-500 font-medium rounded-lg inline-block">
              {flash.notice}
            </p>
          )}

          <h1 className="font-bold text-4xl">Task #{task.id}</h1>

          <TaskItem task={task} />

          <Link
            href={`/tasks/${task.id}/edit`}
            className="mt-2 rounded-lg py-3 px-5 bg-gray-100 inline-block font-medium"
          >
            Edit this task
          </Link>
          <Link
            href="/tasks"
            className="ml-2 rounded-lg py-3 px-5 bg-gray-100 inline-block font-medium"
          >
            Back to tasks
          </Link>
          <div className="inline-block ml-2">
            <Link
              href={`/tasks/${task.id}`}
              onClick={onDestroy}
              as="button"
              method="delete"
              className="mt-2 rounded-lg py-3 px-5 bg-gray-100 font-medium"
            >
              Destroy this task
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
