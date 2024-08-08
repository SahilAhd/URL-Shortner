const express = require('express');
const router = express.Router();
const { shorturl } = require('../controllers/url');

router.post('/', shorturl);  // Corrected line

module.exports = router;
