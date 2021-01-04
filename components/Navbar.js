import React from "react";

export default function Navbar({ user }) {
	return (
		<nav className="flex justify-between items-center py-4 iPhoneX:px-2 iPhonePlus:px-0">
			<h1 className="text-4xl font-bold text-gray-50 font-mono">
				{" "}
				My Todos{" "}
			</h1>
			<div className="flex">
				{user && (
					<a
						href="/api/logout"
						className="rounded bg-yellow-400 hover:bg-gray-100 text-gray-50 hover:text-yellow-400 py-2 px-4 font-semibold"
					>
						Logout
					</a>
				)}
				{!user && (
					<a
						href="/api/login"
						className="rounded bg-yellow-400 hover:bg-gray-100 text-gray-50 hover:text-yellow-400 py-2 px-4 font-semibold"
					>
						Login
					</a>
				)}
			</div>
		</nav>
	);
}
