import express from "express";
import mysql from "mysql";
import cors from "cors";
const app = express();
const db = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "password",
    database: "classicmodels",
    port: 3306
});
app.get("/", (req, res) => {
    res.json("hello it's working :)");
});
app.use(cors());
app.use(express.json());
db.connect((err) => {
    if (err) {
        console.log(err);
        return err;
    }
    else {
        console.log("connection to db was made");
    }
});
app.get("/customers", (req, res) => {
    const q = "SELECT * FROM customers;";
    db.query(q, (err, results, fields) => {
        if (err)
            return err;
        res.send(results);
    });
});
app.listen(4000, () => {
    console.log("Connected to backend");
});
//# sourceMappingURL=db.js.map