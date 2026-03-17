import pkg from 'pg';
const { Client } = pkg;

const connection = new Client({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: "ravneet@123",
    database: "companydb"
});

connection.connect()
.then(() => {
    console.log("Database Connected Successfully");
})
.catch(err => {
    console.log("Connection Error:", err);
});