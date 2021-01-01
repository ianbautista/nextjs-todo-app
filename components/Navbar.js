import React from "react";

export default function Navbar({ user }) {
	return (
		<nav className="flex justify-between items-center py-4">
			<h1 className="text-4xl font-bold text-gray-50 font-mono">
				{" "}
				My Todos{" "}
			</h1>
			<div className="flex">
				{user && (
					<a
						href="/api/logout"
						className="rounded bg-yellow-500 hover:bg-gray-100 text-gray-50 hover:text-yellow-500 py-2 px-4 font-semibold"
					>
						Logout
					</a>
				)}
				{!user && (
					<a
						href="/api/login"
						className="rounded bg-yellow-500 hover:bg-yellow-600 text-gray-50 py-2 px-4"
					>
						Login
					</a>
				)}
			</div>
		</nav>
	);
}
