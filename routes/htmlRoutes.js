const express = require('express');
let router = express.Router();
const path = require('path');

// Lets /notes respond with notes.html
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'))
})

module.exports = router;