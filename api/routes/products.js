const express = require('express');
const router  = express.Router();

router.get('/',(req,res,next) => {
    res.status(200).json({
        message:'get request'
    });
});
router.post('/',(req,res,next) => {
    res.status(200).json({
        message:'post request'
    })
});
router.get('/:productId',(req,res,next) => {
    const id = req.params.productId;
    if(id=='special') {
     res.status(200).json({
        message:'special ID'
    }) ;  
    }
    else{
         res.status(200).json({
        message:'passed ID'
    }) ;  
    }
    res.status(200).json({
        message:'post request'
    })
});
module.exports = router;