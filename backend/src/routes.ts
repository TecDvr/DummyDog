import * as express from "express";
import { connection } from "./db";

const router = express.Router();

router.get('/logs', (req, res) => {
    connection.query("SELECT * FROM GetLogsBodyData", (error, results) => {
        handleError(error, res);
        res.status(200).send(results);
    });
});

router.get('/templates', (req, res) => {
    connection.query("SELECT * FROM LogsTemplateData", (error, results) => {
        handleError(error, res);
        res.status(200).send(results);
    });
});

router.post('/templates', (req, res) => {
    var postData  = req.body;
    connection.query("INSERT INTO LogsTemplateData", postData, (error, results) => {
        handleError(error, res);
        res.end(JSON.stringify(results));
    });
});

const handleError = (error, res) => {
    if (error) {
        res.status(400).send("Could not query DB");
        throw error;
    }
};

export { router };
