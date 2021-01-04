import { table } from "./utils/Airtable";
import auth0 from "./utils/auth0";

export default auth0.requireAuthentication(async (req, res) => {
	const { user } = await auth0.getSession(req);
	const { description } = req.body;

	try {
		const createdRecords = await table.create([
			{ fields: { description, userid: user.name } },
		]);
		const createdRecord = {
			id: createdRecords[0].id,
			fields: createdRecords[0].fields,
		};
		res.statusCode = 200;
		res.json(createdRecord);
	} catch (error) {
		res.statusCode = 500;
		res.json({
			msg: `Oops! ..something went wrong my friend. Here's what happened: ${error}`,
		});
	}
});
