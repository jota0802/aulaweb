import mysql from "mysql";

export const db = mysql.createConnection({
    host: "localhost",
    user:"root",
    password:"",
    database:"db_usuario", // colocar o nome do seu banco
    
});

