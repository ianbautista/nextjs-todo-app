import {table, minifyRecords} from './utils/Airtable'

export default async  (req, res) => {
    try {
        const records = await table.select({}).firstPage();
        const minifiedRecords = minifyRecords(records);
        res.statusCode = 200;
        res.json(minifiedRecords);

    } catch (error) {
        res.statusCode = 500;
        res.json({msg: 'Oops! ..something went wrong my friend.'});
    }

    };