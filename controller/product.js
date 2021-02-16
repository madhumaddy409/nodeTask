const Product = require('../models/product')


exports.postProduct = async (req, res) => {
    const newProduct = new Product(req.body);
    try {
        const product = await newProduct.save();
        res.status(200).json(product);
    } catch (error) {
        res.status(400).json({
            "massage": error.massage
        })
    }

}

exports.getAllProducts = async (req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).json(products);
    } catch (error) {
        res.status(400).json({
            "massage": error.massage
        })
    }  

};


//filter endpoint 
exports.getFilters = async (req, res) => {
    try {
        const productsCategory = await Product.distinct('category')
        const productsBrand = await Product.distinct('brand')
        const productsPrice = await Product.distinct('price')
        const productsGender = await Product.distinct('gender')

        res.status(200).json({"brand":productsBrand,
                                "category":productsCategory,
                                "price":productsPrice,
                                "gender":productsGender
});
    } catch (error) {
        res.status(400).json({
            "massage": error.massage
        })
    }  

    
 
};



//filter
exports.getFilterProducts = async (req, res) => {
    const { filterBy , value } = req.params

    const products = await Product.find({ [filterBy]: value})
            res.status(200).json(products);

}


//search
exports.searchProducts = async (req, res) => {
    const key = req.params
    const value = key.value

    try {
        const products = await Product.find({ $or :[{productName: {$regex : `.*${value}.*`}},
                                            {brand: {$regex : `.*${value}.*`}},
                                            {category: {$regex : `.*${value}.*`}},
                                            {gender: {$regex : `.*${value}.*`}}
                                        
                                        ]})
        res.status(200).json(products);
    } catch (error) {
        res.status(400).json({
            "massage": error.massage
        })
    } 
   


}