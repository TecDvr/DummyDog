import * as mysql from "mysql";
const connection = mysql.createConnection({
    host: "mysql",
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
});

connection.connect(err => {
    if (err) {
        console.log("Could not connect to Database");
        throw err;
    }
});

export { connection };
