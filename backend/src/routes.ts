import * as express from "express";

const router = express.Router();

router.get('/', (req, res) => {
    console.log("Hola...");
});

router.get('/data', (req, res) => {
    console.log("DATA");
});

export { router };
