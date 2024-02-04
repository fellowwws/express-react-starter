const express = require("express");
const router = express.Router();
const { readFileSync } = require('fs');

const data = JSON.parse(readFileSync('./database/tasks.json'));

router.get('/tasks', (req, res) => {
    res.json(data);
}); 

module.exports = router;