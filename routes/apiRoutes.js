const express = require('express');
const res = require('express/lib/response');
let router = express.Router();
const path = require('path');

router.get('/notes', ((req, res) => {
getnotes()
.then((notes) => {
    return res.json(notes);
})
// or rest code 404? not sure
.catch((err) => res.status(500).json(err));
}));

module.exports = router;