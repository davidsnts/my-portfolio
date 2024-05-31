const { response } = require('express');
const Portfolio = require('../models/Portfolio')

const router = require('express').Router();

router.post('/', async (req, res) =>{    
    const portfolio = new Portfolio({
        title: req.body.title,
        description: req.body.description
    });

    try {
        const savedPorfolio = await portfolio.save()
        res.json({
            success : true,
            data : savedPorfolio
        });
    } catch (err) {
        res.json({
            success : false,
            message : err
        });
    }  
});



router.get('/', async (req, res) =>{  
    try {
        const portfolio = await Portfolio.find();
        res.json({
            success: true,
            data : portfolio       
        });
    } catch (error) {        
        res.json({            
            success : false,
            message : error
        });
    }    
});

router.get('/:slug', async (req,res) => {
    try {
        const portfolio = await Portfolio.findOne({ slug : req.params.slug });        
        res.json({
            success : true,
            data : portfolio
        })
        } catch (error) {            
        res.json({
            success : false,
            message : error
        })
    }    
});

router.patch('/:slug', async (req, res) =>{
    try {
        const updatedPortFolio = await Portfolio.updateOne(
        {
            slug : req.params.slug            
        },
        {
            title : req.body.title,
            description : req.body.description 
        });
        
        res.json({
            success : true,
            updated : updatedPortFolio.modifiedCount
        })
    } catch (error) {
        res.json({
            success : false,
            message : error
        })
    }
});

router.delete('/:slug',async (req, res) => {
    try {
        const deletedPortfolio = await Portfolio.deleteOne({
            slug :req.params.slug
        })

        res.json({
            success : true,
            data : deletedPortfolio
        })
    } catch (error) {
        res.json({
            success : false,
            message : error
        })
    }
})

module.exports = router;