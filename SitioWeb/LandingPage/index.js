const http= require('http');
const express = require('express');
const app = express();

app.use(express.static(__dirname+'/'));

app.get('/',(req,res) => {
    res.sendFile("/home/admin/LandinPage/indexedDB.html")
});

app.listen(3000);
console.log('Server on port 3000');