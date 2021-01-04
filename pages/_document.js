import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const initialProps = await Document.getInitialProps(ctx);
		return { ...initialProps };
	}

	render() {
		return (
			<Html>
				<Head>
					<title>My To Do App</title>
					<link
						rel="icon"
						href="https://mysimpletodoapp.now.sh/todo.png"
					/>
					<meta
						name="viewport"
						content="width=device-width, initial-scale=1"
					/>
					<meta name="theme-color" content="#000000" />
					<meta
						name="description"
						content="Todo App made by Christian Bautista"
					/>
					<link rel="apple-touch-icon" href="../public/favicon.png" />
					<link rel="manifest" href="/manifest.json" />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
