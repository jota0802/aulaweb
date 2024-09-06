import {db} from "../db.js"

export const getUsers = (_, res) => {
    const q = "select * from agenda";

db.query(q, (err, data) => {
    if (err) return res.json(err);  
    
    return res.status(200).json(data);
});
}

export const addUser = (req, res) =>{
    const q = 'insert into tb_agenda (`nome`,`endereco`,`telefone`,`email`,`data_nasc`) values(?)';

    const values = [
        req.body.nome, 
        req.body.endereco, 
        req.body.telefone, 
        req.body.email, 
        req.body.data_nasc, 
    ];

    
}