import Head from "next/head";
import Navbar from "../components/Navbar";
import Todo from "../components/Todo";
import { table, minifyRecords } from "./api/utils/Airtable";
import { TodosContext } from "../context/TodosContext";
import { useEffect, useContext } from "react";
import auth0 from "./api/utils/auth0";

export default function Home({ initialTodos, user }) {
	const { todos, setTodos } = useContext(TodosContext);

	console.log(user);
	useEffect(() => {
		setTodos(initialTodos);
	}, []);

	return (
		<div>
			<Head>
				<title>My To Do App</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Navbar user={user} />
			<main>
				<h1>To Do App</h1>
				<ul>
					{todos &&
						todos.map((todo) => <Todo key={todo.id} todo={todo} />)}
				</ul>
			</main>
		</div>
	);
}

export async function getServerSideProps(context) {
	const session = await auth0.getSession(context.req);
	console.log(session?.user || "not logged in");
	try {
		const todos = await table.select({}).firstPage();
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
