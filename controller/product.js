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
    if(filterBy === "category")
    {
        try {
            const products = await Product.find({category: value})
            res.status(200).json(products);
        } catch (error) {
            res.status(400).json({
                "massage": error.massage
            })
        } 

    }
    else if(filterBy === "gender")
    {
        try {
            const products = await Product.find({gender: value})
            res.status(200).json(products);
        } catch (error) {
            res.status(400).json({
                "massage": error.massage
            })
        } 

    }
    else if(filterBy === "brand")
    {
        try {
            const products = await Product.find({brand: value})
            res.status(200).json(products);
        } catch (error) {
            res.status(400).json({
                "massage": error.massage
            })
        } 

    }
    else if(filterBy === "price")
    {
        try {
            const products = await Product.find({price: value})
            res.status(200).json(products);
        } catch (error) {
            res.status(400).json({
                "massage": error.massage
            })
        } 

    }else{
        res.status(400).json({
            "massage": "category not found"
        })

    }

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