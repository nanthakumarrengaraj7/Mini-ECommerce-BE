const express = require('express');
const { getAllProducts, getSingleProducts } = require('../controllers/productController');
const router = express.Router();

router.route('/getAllProducts').get(getAllProducts);
router.route('/getSingleProduct/:id').get(getSingleProducts);

module.exports = router;