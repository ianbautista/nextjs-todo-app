import React, { useState, useContext } from "react";
import { TodosContext } from "../context/TodosContext";
import { FaPlusSquare } from "react-icons/fa";

export default function TodoForm() {
	const [todo, setTodo] = useState("");
	const { addTodo } = useContext(TodosContext);

	const handleSubmit = (e) => {
		e.preventDefault();
		addTodo(todo);
		setTodo("");
	};
	return (
		<form onSubmit={handleSubmit}>
			<div className="flex items-center justify-between flex-auto">
				<label htmlFor="todo" className="w-full">
					<input
						type="text"
						name="todo"
						id="todo"
						value={todo}
						onChange={(e) => setTodo(e.target.value)}
						placeholder="add to do.."
						className="border p-2 rounded-lg appearance-none focus:outline-none focus:border-none w-full flex-auto bg-gray-100 focus:bg-gray-50"
					/>
				</label>
				<button
					type="submit"
					className="text-gray-500 hover:text-green-700 text-3xl py-auto px-1 appearance-none focus:outline-none cursor-pointer"
				>
					{" "}
					<FaPlusSquare />{" "}
				</button>
			</div>
		</form>
	);
}
