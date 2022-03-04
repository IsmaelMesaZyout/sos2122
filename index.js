console.log("Hola Mundo");
const cool = require("cool-ascii-faces"); //cool es una función 
const express = require("express");
console.log(cool());
const app = express();
const port = process.env.PORT || 8080;


app.use("/", express.static("public"));

app.get("/faces", (req,res)=>{
    console.log("Requested /faces route");
    res.send("<html><body><h1>HOLA</h1></body></html>" + cool());
});

app.get("/time", (req,res)=>{
    console.log("Requested /time route");
    res.send("<html><body><h1>"+ new Date() + "</h1></body></html>" + cool());
});

app.listen(port, () =>{
    console.log(`Server ready at port ${port}`);
});