import "../styles/index.css";
import { TodosProvider } from "../context/TodosContext";

function MyApp({ Component, pageProps }) {
	return (
		<TodosProvider>
			<div className="container mx-auto max-w-xl h-screen bg-yellow-500">
				<Component {...pageProps} />
			</div>
		</TodosProvider>
	);
}

export default MyApp;
