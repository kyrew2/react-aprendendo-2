import { useState } from "react";

const [tasks, setTasks] = useState([
    { id: 1, title: "Tarefa 1", completed: false },
    { id: 2, title: "Tarefa 2", completed: false },
    { id: 3, title: "Tarefa 3", completed: false },
    { id: 4, title: "Tarefa 4", completed: false },
]);

export function TodoList() {
    const items = ["Tarefa 1", "Tarefa 2", "Tarefa 3", "Tarefa 4"];

    return (
        <div className="max-w-xl mx-auto mt-8 p-6 bg-white/80 dark:bg-gray-800 rounded-lg shadow-md ring-1 ring-gray-200 dark:ring-0">
            <h1 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Minhas tarefas</h1>

            <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                {items.map((tarefa, idx) => (
                    <li
                        key={idx}
                        className="flex items-center justify-between py-3 px-2 hover:bg-gray-50 dark:hover:bg-gray-700 rounded transition"
                    >
                        <div className="flex items-center gap-3">
                            <input
                                type="checkbox"
                                className="h-5 w-5 text-indigo-600 rounded border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700"
                                aria-label={`Marcar ${tarefa}`}
                            />
                            <span className="text-gray-700 dark:text-gray-200">{tarefa}</span>
                        </div>

                        <div className="text-xs text-gray-500 dark:text-gray-400">Hoje</div>
                    </li>
                ))}
            </ul>
        </div>
    );
}