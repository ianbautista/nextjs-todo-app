import Head from "next/head";
import Navbar from "../components/Navbar";
import Todo from "../components/Todo";
import { table, minifyRecords } from "./api/utils/Airtable";
import { TodosContext } from "../context/TodosContext";
import { useEffect, useContext } from "react";
import auth0 from "./api/utils/auth0";
import TodoForm from "../components/TodoForm";

export default function Home({ initialTodos, user }) {
	const { todos, setTodos } = useContext(TodosContext);
	useEffect(() => {
		setTodos(initialTodos);
	}, []);
	console.log("user", user);
	return (
		<div className="h-full w-full flex-col flex items-center">
			<Head>
				<title>My To Do App</title>
				<meta
					name="viewport"
					content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no, viewport-fit=cover"
				/>
			</Head>
			<div className="iPhonePlus:max-w-s iPhonePlus:px-5 iPhonePlus:mx-0 iPhoneX:max-w-ss iPhoneX:px-1 bg-yellow-400 max-w-lg sm:max-w-sm w-full flex-col fixed z-10 top-6 px-9 2xl:max-w-lg 2xl:mx-28  rounded-t-2xl mx-24  md:max-w-lg">
				<Navbar user={user} />
				{user && <TodoForm />}
			</div>
			<main>
				{!user && (
					<p className="text-gray-50 mt-80 px-6">
						{" "}
						Please login to use this App.
					</p>
				)}
				{user && (
					<ul className="mt-32 px-6 bg-yellow-400 w-full Andriod1:max-w-ss 2xl:max-w-lg 2xl:px-5 iPhoneX:w-screen iPhoneX:px-3 iPhonePlus:w-screen iPhonePlus:mx-0 iPhonePlus:px-0 md:max-w-lg md:px-5">
						{todos &&
							todos.map((todo) => (
								<Todo key={todo.id} todo={todo} />
							))}
					</ul>
				)}
			</main>
		</div>
	);
}

export async function getServerSideProps(context) {
	const session = await auth0.getSession(context.req);
	let todos = [];
	try {
		todos = await table
			.select({ filterByFormula: `userid = '${session.user.name}'` })
			.firstPage();
		return {
			props: {
				initialTodos: minifyRecords(todos),
				user: session?.user || null,
			},
		};
	} catch (error) {
		console.error(error);
		return {
			props: {
				error: "Oops! ..something went wrong my friend.",
			},
		};
	}
}
