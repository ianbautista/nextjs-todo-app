import "../styles/index.css";
import { TodosProvider } from "../context/TodosContext";

function MyApp({ Component, pageProps }) {
	return (
		<TodosProvider>
			<div className=" overflow-hidden flex mx-auto w-screen h-screen bg-yellow-400 py-4 px-4 box-border">
				<div className=" overflow-hidden overflow-y-auto max-w-xl mx-auto h-full iPhonePlus:w-full iPhoneX:w-full bg-yellow-400 border-gray-50 border-8 rounded-3xl">
					<Component {...pageProps} />
				</div>
			</div>
		</TodosProvider>
	);
}

export default MyApp;
