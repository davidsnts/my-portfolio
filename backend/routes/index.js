const router = require('express').Router();

require('../db/mongoConnection');

router.get('/', (req,res) =>{
    res.json({
        success:false,
        message: "Please, do not call /api, it is for our server"
    })
});
const portfolio = require('./portfolio');

router.use('/portfolio', portfolio);

module.exports = router;
                                                         