import {table, getMinifiedRecord} from './utils/Airtable'

export default async  (req, res) => {
    const {id, fields} = req.body;

    try {
        const updatedRecord = await table.update([
            {id, fields}
        ]);

        res.statusCode = 200;
        res.json(getMinifiedRecord(updatedRecord[0]));

    } catch (error) {
        res.statusCode = 500;
        res.json({msg: 'Oops! ..something went wrong my friend.'});
    }

    };