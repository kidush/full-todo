import { Link } from "@inertiajs/react";
export default function FilterButtons() {
  return (
    <div className="flex flex-wrap items-center">
      <div className="inline-flex rounded-md shadow-sm" role="group">
        <Link
          href="/"
          type="button"
          className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-blue-200 rounded-s-lg border-blue-200 hover:bg-blue-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-blue-800 dark:border-blue-700 dark:text-white dark:hover:text-white dark:hover:bg-blue-700 dark:focus:ring-blue-500 dark:focus:text-white"
        >
          All
        </Link>
        <Link
          href="/tasks?status=pending"
          type="button"
          className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-blue-200 hover:bg-blue-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-blue-800 dark:border-blue-700 dark:text-white dark:hover:text-white dark:hover:bg-blue-700 dark:focus:ring-blue-500 dark:focus:text-white"
        >
          Pending
        </Link>
        <Link
          href="/tasks?status=complete"
          type="button"
          className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-e-lg hover:bg-blue-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-blue-800 dark:border-blue-700 dark:text-white dark:hover:text-white dark:hover:bg-blue-700 dark:focus:ring-blue-500 dark:focus:text-white"
        >
          Complete
        </Link>
      </div>
    </div>
  );
}
