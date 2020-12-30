import React from "react";
import { FaTrashAlt } from "react-icons/fa";

export default function Todo({ todo }) {
	return (
		<li className="bg-white flex items-center shadow-lg rounded-lg my-2 py-2 px-4">
			<input
				type="checkbox"
				name="completed"
				id="completed"
				checked={todo.fields.completed}
				className="mr-2 form-checkbox h-5 w-5"
			/>
			<p
				className={`flex-1 text-gray-800 ${
					todo.fields.completed ? "line-through" : ""
				}`}
			>
				{" "}
				{todo.fields.description}{" "}
			</p>
			<button type="button" className="hover:text-red-700">
				<FaTrashAlt />
			</button>
		</li>
	);
}
