const express = require("express");

const router = express.Router();

router.get("/home", (req, res) =>{
    res.send("Welcome home BOSSING");
});

router.get("/about", (req, res) =>{
    res.send("Welcome about BOSSING");
});

router.get("/contact", (req, res) =>{
    res.send("Welcome contact BOSSING");
});

router.get("/info", (req, res) =>{
    res.send("Welcome info BOSSING");
});

router.get("/dashboard", (req, res) =>{
    res.send("Welcome dashboard BOSSING");
});

module.exports = router;