const express=require("express")
const app = express()
const path = require("path")
const dotenv=require("dotenv")
dotenv.config({path:path.resolve(__dirname,"./.env")})
const port = parseInt(process.env.PORT)

const jwtPassword = process.env.JWT_PASSWORD

const {createTodo,updateTodo} = require("./types")

const {todo} = require("./db")

const cors = require ("cors")
app.use(express.json())
app.use(cors({origin:"http://localhost:5173"}))
app.post("/todos", async function (req, res) {
    try {
        const title = await req.body.title;
        const description = await  req.body.description;
        const status = await req.body.completed
        const todoCreation = await createTodo.safeParse({ title: title, description: description, completed: status });
        if (!todoCreation.success) {
            res.status(400).json({ err: "todo not safeparsed", error: todoCreation.error });
        } else {
            // put it in mongoDb
            await todo.create({
                title: title,
                description: description,completed:status
            });
            res.json({ msg: "todo created" });
        }
    } catch (error) {
        // Handle JSON parsing error
        console.error("JSON parsing error:", error);
        res.status(400).json({ error: "Invalid JSON format", err:error });
    }
});


app.get("/todos",async function(req,res){
    try{const todos = await todo.find({})
res.status(200).json({todos:todos})}
    catch(err){res.status(400).json({msg:"cant get the todo"})}
    

})

app.put("/completed", async function(req, res) {
    const updatePayload = req.body;
    const parsePayload = updateTodo.safeParse(updatePayload);
    if (!parsePayload.success) {
        res.status(400).json({ msg: "not able to parse the update todo", err: parsePayload.error });
    } else {
        try {
            const updatedTodo = await todo.findByIdAndUpdate(req.body.id, { completed: true });
            if (!updatedTodo) {
                return res.status(404).json({ msg: "Todo not found" });
            }
            res.status(200).json({ msg: "todo updated" });
        } catch (err) {
            res.status(400).json({ msg: "update todo failed" });
        }
    }
});


app .listen(port,()=>{console.log("we are running server on " + port)})


module.exports= {
    port:"qafdadsfaedfadsfdsfe",
    jwtPassword : jwtPassword,

}

