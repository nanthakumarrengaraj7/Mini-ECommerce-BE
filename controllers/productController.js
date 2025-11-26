const productModel = require("../models/productModel")

exports.getAllProducts = async (req, res) => {
    try {
        const query = req.query.keyword ? {
            name: {
                $regex: req.query.keyword,
                $options: 'i'
            }
        } : {};
        const products = await productModel.find(query);
        res.status(200).json({ success: true, products });
    } catch (error) {
        res.status(404).json({ success: false, message: error.message })
    }
}

exports.getSingleProducts = async (req, res) => {
    try {
        const product = await productModel.findById(req.params.id);
        res.status(200).json({ success: true, product })
    } catch (error) {
        res.status(404).json({ success: false, messge: "Unable to get product with ID" })
    }
}

