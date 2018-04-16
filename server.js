const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const app = express();
const session = require("express-session");
const cookieParser = require("cookie-parser");


const login=require("./server/routers/login-router");
const register=require("./server/routers/register-router");
const logout=require("./server/routers/logout-router");
const userManage=require("./server/routers/userManage-router");



app.use(express.static("public"));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("./public"));



app.get("*", (req, res) => {
    "use strict";
    res.sendFile(path.resolve(__dirname, "public", "index.html"));
});
app.use(cookieParser());
app.use(session({
    secret: "a",
    resave: true,
    saveUninitialized: true
}));


app.use("/",login);
app.use("/",register);
app.use("/",logout);
app.use("/", userManage);



var server = app.listen(3000, () => {
    console.log("listening at port %s", server.address().port);
});

module.exports = server;