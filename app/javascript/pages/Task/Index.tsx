import { Link, Head, useForm, router } from '@inertiajs/react'
import { FlashMessage } from '../Types/FlashMessage';
import { Task } from '../Types/Task';
import TaskItem from './Task';

type IndexProps = {
  tasks: Task[];
  flash: FlashMessage;
}

export default function Index({ tasks, flash }: IndexProps) {

  const { data, setData, reset } = useForm({
    name: '',
    status: 'pending',
  })

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (data.name.trim() === '') return

    router.post('/tasks', data)
    reset()
  }

  return (
    <>
      <Head title="My To-do list" />
      <div className="mx-auto md:w-2/3 w-full px-8 pt-8">
        {flash.notice && (
          <p className="py-2 px-3 bg-green-50 mb-5 text-green-500 font-medium rounded-lg inline-block">
            {flash.notice}
          </p>
        )}
        <div className="flex justify-between items-center">
          <h1 className="font-bold text-4xl">My To-do list</h1>
        </div>

        <div className="min-w-full">
          <div className="items-center border-b-2 border-blue-500 py-2">
            <form onSubmit={onSubmit} className="flex w-full mx-auto px-4 py-2">
              <input
                className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                type="text"
                placeholder="Add a task"
                value={data.name}
                onChange={e => setData('name', e.target.value)} />

              <button
                className="rounded-lg py-3 px-5 bg-blue-600 text-white block font-medium"
              >
                +
              </button>
            </form>
          </div>
          <ul className="divide-y divide-gray-200 px-4">
            {tasks.map((task) => (
              <li className="flex" key={task.id}>
                <TaskItem task={task} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}
