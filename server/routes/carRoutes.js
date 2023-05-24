const express = require('express');
const router = express.Router();
const carController = require('../controllers/carController');

/**
 * App Routes
 */
router.get('/', carController.homepage);
router.get('/categories', carController.exploreCategories);
router.get('/cars/:id', carController.exploreCars );



module.exports = router;
