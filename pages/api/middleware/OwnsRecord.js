import auth0 from "../utils/auth0";
import { table } from "../utils/Airtable";

const OwnsRecord = (handler) =>
	auth0.requireAuthentication(async (req, res) => {
		const { user } = await auth0.getSession(req);

		const { id } = req.body;

		try {
			const existingRecord = await table.find(id);

			if (!existingRecord || user.name !== existingRecord.fields.userid) {
				res.statusCode = 404;
				return res.json({ msg: "Oops.. Record not found" });
			}
			req.record = existingRecord;
			return handler(req, res);
		} catch (error) {
			console.error(error);
			res.statusCode = 500;
			return res.json({ msg: "Something went wrong my friend.." });
		}
	});

export default OwnsRecord;
