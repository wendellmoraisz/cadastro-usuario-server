import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

async function connectDB() {
    const mysql = require("mysql2/promise");
    const connection = await mysql.createConnection({
        host: "localhost",
        user: "root",
        password: process.env.DATABASE_PASSWORD,
        database: process.env.DATABASE_NAME,
    });
    console.log("Connected at MySQL");
    return connection;
}

app.post("/register", async (req: Request, res: Response) => {
    try {
        const db = await connectDB();
        db.query("INSERT INTO users (name, email, password) VALUES (?,?,?)",
            [req.body.name, req.body.email, req.body.password]);
        res.send({status: 200, message: "Register success"});
    } catch(e){
        res.send(e);
    }
});

async function tableExists(req: Request){
        const db = await connectDB();
        const [result] = await db.query(`SELECT * FROM users WHERE email = ? AND password = ?`,
        [req.body.email, req.body.password]);
        if (result.length != 0) {
            return true;
        } else {
            return false;
        }
}

app.post("/login", async (req, res) => {
    const query = await tableExists(req);

    if(query){
        res.send({ status: 200, message: "Login successful"})
    } else {
        res.send({ status: 401, message: "Invalid login" });
    }
});

const PORT = 3001;
app.listen(PORT, "localhost");
console.log(`Server is running at http://localhost:${PORT}`);