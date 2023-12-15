const fs=require("fs").promises

console.log("we will start reading the file")

const expensiveFunc=()=>{
    for(let i=0;i<=1000000;i++){
        if(i==1000000){
            console.log("we are printing the i "+i)
        }
    }
}

const read = async (fileName)=>{
     const data = await fs.readFile(fileName,"utf-8")
     console.log( data.toString())
   
}

const write = async (fileName,data)=>{
    await fs.writeFile(fileName,data)
    console.log("we are complited writting to the file")
    
}

read("assignments0To1harkirat/week-2/01-async-js/easy/a.txt")

expensiveFunc()

write ("assignments0To1harkirat/week-2/01-async-js/easy/a.txt","adlfajfdaijdfda!!!!!!fijadfsij")