import * as express from "express";
import * as cors from "cors";
import * as bodyParser from "body-parser";
import { router } from "./routes";

const PORT = process.env.PORT || 3187;
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(router);

app.listen(PORT, () => {
    console.log(`Server is running in http://localhost:${PORT}`)
});
