import { Link, Head } from '@inertiajs/react'
import Form from './Form'

export default function New({ task }) {
  return (
    <>
      <Head title="New task" />

      <div className="mx-auto md:w-2/3 w-full px-8 pt-8">
        <h1 className="font-bold text-4xl">New task</h1>

        <Form
          task={task}
          onSubmit={(form) => {
            form.transform((data) => ({ task: data }))
            form.post('/tasks')
          }}
          submitText="Create task"
        />

        <Link
          href="/tasks"
          className="ml-2 rounded-lg py-3 px-5 bg-gray-100 inline-block font-medium"
        >
          Back to tasks
        </Link>
      </div>
    </>
  )
}
