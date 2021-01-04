import React, { useContext } from "react";
import { TodosContext } from "../context/TodosContext";
import { FaTrashAlt } from "react-icons/fa";

export default function Todo({ todo }) {
	const { updateTodo, deleteTodo } = useContext(TodosContext);
	const handleToggleCompleted = async () => {
		const updatedFields = {
			...todo.fields,
			completed: !todo.fields.completed,
		};
		const updatedTodo = { id: todo.id, fields: updatedFields };
		updateTodo(updatedTodo);
	};
	return (
		<li className="flex justify-between bg-gray-50 grid-cols-3 grid-rows-1 items-center shadow-lg rounded-lg my-2 py-2 px-4 transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-110">
			<div>
				<input
					type="checkbox"
					name="completed"
					id="completed"
					checked={todo.fields.completed}
					className="mr-1 mt-1 form-checkbox h-5 w-5 cursor-pointer bg-gray-50"
					onChange={handleToggleCompleted}
				/>
			</div>
			<div className="flex justify-items-start w-11/12">
				<p
					className={`whitespace-pre-wrap flex-1 text-left text-gray-800 ${
						todo.fields.completed ? "line-through text-red-600" : ""
					}`}
				>
					{" "}
					{todo.fields.description}{" "}
				</p>
			</div>
			<button
				type="button"
				className="text-gray-500 hover:text-red-700 appearance-none focus:outline-none cursor-pointer"
				onClick={() => deleteTodo(todo.id)}
			>
				<FaTrashAlt />
			</button>
		</li>
	);
}
