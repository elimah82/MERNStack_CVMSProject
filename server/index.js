const express = require('express');
const cors = require('cors');
const { MongoClient } = require('mongodb');

const app = new express();
app.use(express.json());
app.use(cors());

const client = new MongoClient('mongodb+srv://admin:admin@cluster0.cjqwipx.mongodb.net/?retryWrites=true&w=majority')
client.connect();
const db = client.db('mswdsrp');
const col = db.collection('register');

app.get('/home', (req, res)=> {
    res.send("Home Page");
})

app.post('/insert', (req, res) => {
    console.log(req.body);
    col.insertOne(req.body);
    res.send("suuccessfully received");
})

app.get('/showall', async (req, res) => {
    const result = await col.find().toArray();
    res.send(result);
})

app.post('/check', async(req, res) => {
    console.log("entering check")
    const result = await col.findOne({'name':req.body.un})
    if(result.password == req.body.pw) {
        res.send(result)
    }
    else {
        res.send("failed")
    }
    console.log(result);
})

app.listen(8081,()=>{console.log("server running")});