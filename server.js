const os = require('os')
const express = require('express')
const app = express()
const port = 3000

app.get('/', function(req, res){
    res.send("Hello World from `" + os.hostname() + "`")
});
app.get('/reverse/:str', function(req, res){
    res.send(req.params.str.split("").reverse().join("") + " from `" + os.hostname() + "`")
});

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
