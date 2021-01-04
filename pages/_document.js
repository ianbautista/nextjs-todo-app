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
					<meta http-equiv="X-UA-Compatible" content="IE=edge" />
					<meta name="theme-color" content="#000000" />
					<meta
						name="description"
						content="Todo App made by Christian Bautista"
					/>
					<meta
						name="keywords"
						content="to, do, app, todo, next, christian, bautista, auth0, web, pwa"
					/>
					<meta name="theme-color" content="#000000" />
					<meta name="mobile-web-app-capable" content="yes" />
					<meta
						name="apple-mobile-web-app-title"
						content="My To Do App"
					/>
					<meta name="apple-mobile-web-app-capable" content="yes" />
					<meta
						name="apple-mobile-web-app-status-bar-style"
						content="default"
					/>
					<link rel="icon" href="/favicon.png" />
					<link rel="apple-touch-icon" href="/favicon.png" />
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
