import {table, getMinifiedRecord} from './utils/Airtable'

export default async  (req, res) => {
    const {id} = req.body;

    try {
        const deletedTodo = await table.destroy([id]);

        res.statusCode = 200;
        res.json(getMinifiedRecord(deletedTodo[0]));

    } catch (error) {
        res.statusCode = 500;
        res.json({msg: 'Oops! ..something went wrong my friend.'});
    }

    };