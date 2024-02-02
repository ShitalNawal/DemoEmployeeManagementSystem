//const { DatabaseError } = require("pg")

const Pool = require("pg").Pool

const pool = new Pool({
    user:"postgres",
    host:"localhost",
    database:"Crud-Api",
    password:"Shital@123",
    port:5432
})
//Create
const createUsers = (req,res)=>{
     const {name, email} = req.body;

     pool.query(
        "INSERT INTO users(name, email) VALUES($1, $2) RETURNING * ",
        [name, email],
        (err, result)=>{
            if(err){
                console.log(err);
                throw err
            }
            res.status(200).json({
                msg: "Data created successfully",
                data: result.rows[0],
            })
        }
     )
}

//read
const getUsers = (req,res)=>{
pool.query(
    "SELECT * FROM users",(err,result)=>{
        if(err){
            console.log(err);
            throw err
        }
        res.json({
            
            data: result.rows,
        })
    }
)
}

//get user by id

const getUserbyId = (req,res)=>{
    let id = parseInt(req.params.id)
    pool.query("SELECT * FROM users WHERE id = $1", [id], (err, result)=>{
        if (err){
            console.log(err);
            throw err
        }
        res.json({
            data: result.rows
        })
    })
}

//Update User

const updateUser = (req,res)=>{
    let id = parseInt(req.params.id)
    const {name, email} = req.body;
    pool.query("UPDATE users SET name = $1, email = $2 WHERE id = $3",[name, email,id], (err,result)=>{
        if(err){
            console.log(err)

            throw err
        }
        res.json({
            msg: "data Updated Successfully",
            
        })
    })
}
const deleteUser = (req,res)=>{
    let id = parseInt(req.params.id);
    pool.query("DELETE FROM users WHERE id = $1",[id], (err,result)=>{
        if(err){
            throw err
        }
        res.json({
            msg: "Data deleted successfully"
        })
    })
}
module.exports = {
    createUsers,
    getUsers,
    getUserbyId,
    updateUser,
    deleteUser
}