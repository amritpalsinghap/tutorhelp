const express = require("express")
const config = require("./config.json")
const Client = require("./client")

const app = express()
const node_port = config.developement.port;
let clientObj = "";

app.use(express.json())

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:8080"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

//routes
app.get('/', (req, res) => res.send("Hello World from port 3000"))
app.post('/', (req, res) => {
    // let emailAddress = req.body.emailAddress;
    // let fullName = req.body.fullName;
    // let subjects = req.body.subjects;
    // let description = req.body.description;
    // let docs = req.body.docs;
    // clientObj = new Client.Client(emailAddress, fullName, subjects, description, docs)
    // let clientinfo = clientObj.getClientInfo();
    res.send(req.body);
})



//server runing on port
app.listen(node_port, () => console.log('app listening on port 3000'))