

// AbBwO101k745Lnzo
// shivangishukla
const express = require("express");
const mongoose = require("mongoose");
const UserModel = require("./User.js");
const bodyParser = require("body-parser");
const cors = require("cors");


mongoose.connect(
    "mongodb+srv://shivangishukla:AbBwO101k745Lnzo@cluster0.4thc4kw.mongodb.net/?retryWrites=true&w=majority"
    // "mongodb+srv://shivangi:lqZap7Ynxo1VmVhH@cluster0.nn8wcg2.mongodb.net/?retryWrites=true&w=majority"
)
    .then(() => {
        console.log("Connected");
    })
    .catch((error) => {
        console.log(error);
        console.log('Failed');
    })

const app = express();
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/users',
    async (req, res) => {
        const users = await UserModel.find()
        // res.send(users);
        res.send("helloWorld");
        console.log(error);
    })

app.listen(5000,
    () => console.log("backend"));

