const fs = require ("fs").promises
console.log("we are writting the program for file cleaning")

async function  read(fileName){
    const data = await fs.readFile(fileName,"utf-8")
    console.log("we are printing the data : "+data.toString())
    console.log(data.toString().split(" "))

    const data2=data.toString().split(" ").filter (word => word !== "").join(" ")
    console.log("we are printing the data after cleaning : "+ data2 )
    return data2
}
async function write (data,fileName){
    await fs.writeFile(fileName,data)
    console.log("successfully written on the file")
}
async function main (){

    const data3=await read("assignments0To1harkirat/week-2/01-async-js/medium/a.txt")
    write (data3,"assignments0To1harkirat/week-2/01-async-js/medium/a.txt")
}
main ()