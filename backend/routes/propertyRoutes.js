import express from 'express'
//const express= require('express')

import {getProperties,getOwnedProperties,getIncompleteProperties,getCompletedProperties,getPropertyByAddress,addNewProperty,editProperty,useAddressToFindPosition, updatePropertyBought,updatePropertySold} from '../controllers/propertyControllers.js'
//const {getProducts, getProductById,deleteProduct,createProduct, updateProduct,getTopProducts,createProductReview}= require('../controllers/productControllers.js')

//import {protect,admin} from '../Middleware/authMiddleware.js'
//const {protect,admin} = require('../Middleware/authMiddleware.js') 

const router = express.Router()
  
//@Fetch all products
//@GET api/products/
//@Public access
//@this is good commenting syntax,leting others know the routes



router.route('/').get(getProperties)
router.route('/owned').post(getOwnedProperties)
router.route('/complete').get(getCompletedProperties)
router.route('/incomplete').get(getIncompleteProperties)
router.route('/:address').get(getPropertyByAddress)
router.route('/buy/:address').post(updatePropertyBought)
router.route('/sell/:address').post(updatePropertySold)
router.route('/propertypos/:addressalso').get(useAddressToFindPosition)
router.route('/newproperty').post(addNewProperty)
router.route('/editproperty/:id').post(editProperty)





//exports.router = router;
export default router