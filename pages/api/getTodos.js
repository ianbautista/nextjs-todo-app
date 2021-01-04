import { table, minifyRecords } from "./utils/Airtable";
import auth0 from "./utils/auth0";

export default auth0.requireAuthentication(async (req, res) => {
	try {
		const records = await table
			.select({ filterByFormula: `userid = '${session.user.name}'` })
			.firstPage();
		const minifiedRecords = minifyRecords(records);
		res.statusCode = 200;
		res.json(minifiedRecords);
	} catch (error) {
		res.statusCode = 500;
		res.json({
			msg: `Oops! ..something went wrong my friend. Here's what happened: ${error}`,
		});
	}
});
