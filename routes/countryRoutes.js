const express = require('express');
const router = express.Router();
const countryController = require('../controllers/countryController');

router.get('/api/country', countryController.getCountryData);

module.exports = router;

