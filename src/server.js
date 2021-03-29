const express = require("express");
const app = express();

app.use(express.json());


app.get("/", (req, res)=> {
    console.log(req.query);
    res.send(`hello your age is ${req.query.age}` );
    
});

app.get("/person/", (req, res)=> {

    console.log(req.params.id)
    res.send({
        name: "phil",
        age: "36",
        id: req.params,
    });

    
});

app.post("/", (req, res) => {
    console.log(req.body)
    res.send({message: "success"})
})

app.post("/person", (req, res) => {
    console.log(req.body)
    res.send({message: "success"})
})


app.listen(5000, ()=> {
    console.log("listening on port 5000");
});