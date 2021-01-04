import { table, getMinifiedRecord } from "./utils/Airtable";
import ownsRecord from "./middleware/OwnsRecord";

export default ownsRecord(async (req, res) => {
	const { id } = req.body;

	try {
		const deletedTodo = await table.destroy([id]);

		res.statusCode = 200;
		res.json(getMinifiedRecord(deletedTodo[0]));
	} catch (error) {
		res.statusCode = 500;
		res.json({
			msg: `Oops! ..something went wrong my friend. Here's what happened: ${error}`,
		});
	}
});
