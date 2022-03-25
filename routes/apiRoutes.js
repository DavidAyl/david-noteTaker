const express = require('express');
const res = require('express/lib/response');
let router = express.Router();
const path = require('path');

router.get('/notes', (req, res), function() {
getnotes()
.then((notes) => {
    return res.json(notes);
})
.catch((err) => res.status(500).json(err));
});

module.exports = router;