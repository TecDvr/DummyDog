import * as express from "express";
import { connection } from "./db";

const router = express.Router();

router.get('/', (req, res) => {
    connection.query("SELECT * FROM SendLogsBodyData", (error, results, fields) => {
        if (error) {
            res.status(400).send("Could not query DB");
            throw error;
        }        
        res.status(200).send(results);
    });
});

router.get('/data', (req, res) => {
    res.status(200).send('Data');
});

export { router };
