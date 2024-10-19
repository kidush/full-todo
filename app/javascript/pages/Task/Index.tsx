import { Link, Head } from '@inertiajs/react'
import { Fragment } from 'react'
import Task from './Task'

export default function Index({ tasks, flash }) {
  return (
    <>
      <Head title="Tasks" />
      <div className="mx-auto md:w-2/3 w-full px-8 pt-8">
        {flash.notice && (
          <p className="py-2 px-3 bg-green-50 mb-5 text-green-500 font-medium rounded-lg inline-block">
            {flash.notice}
          </p>
        )}
        <div className="flex justify-between items-center">
          <h1 className="font-bold text-4xl">Tasks</h1>
          <Link
            href="/tasks/new"
            className="rounded-lg py-3 px-5 bg-blue-600 text-white block font-medium"
          >
            New task
          </Link>
        </div>

        <div className="min-w-full">
          {tasks.map((task) => (
            <Fragment key={task.id}>
              <Task task={task} />
              <p>
                <Link
                  href={`/tasks/${task.id}`}
                  className="ml-2 rounded-lg py-3 px-5 bg-gray-100 inline-block font-medium"
                >
                  Show this task
                </Link>
              </p>
            </Fragment>
          ))}
        </div>
      </div>
    </>
  )
}
