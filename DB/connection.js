import mysql from"mysql2";
const connection= mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"ravneet@123",
    database:"dbtest"
});
connection.connect((err)=> {
    if(err)
    {
        console.log("Connection failed");
    }
    else
    {
        console.log("Connected to MYSQL");
    }
})

// Running Queries from Node.js
connection.query("SELECT * FROM EMPLOYEE6", (err,result)=> {
    if(err)throw err;
    console.log(result);
});
// insert in to employee6
const sql= "INSERT INTO employee6(emp_id, name, department, salary, email) VALUES(104, 'Priya', 'ME', 80000,'cde@gmail.com')"
connection.query(sql,(err,result)=>{
if(err) {
    throw err;
}
console.log(result);
});
connection.end();
