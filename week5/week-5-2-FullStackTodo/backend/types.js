const zod = require("zod")

const createTodo = zod.object({
    title:String(),
    description:String(),
})
const updateTodo = zod.object({
    id:String
})


module.exports= {
    createTodo: createTodo,
    updateTodo: updateTodo
}