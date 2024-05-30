const { response } = require('express');

const router = require('express').Router();

router.get('/', (req, res) =>{
    const data = [{
        id: 1,
        name: "My first Project",
        createdAt: '2020-01-01'
    },
    {
        id: 2,
        name: "My Second Project",
        createdAt: '2020-02-02'
    },
    {
        id: 3,
        name: "My other Project",
        createdAt: '2020-01-03'
    },

    ];

    res.json({
        success: true,
        data : data
    });
});

router.get('/:portfolioId', (req, res) => {
    console.log('id: ', req.params.portfolioId);
    res.json({
        success: true,
        id : req.params.portfolioId
    });
})

router.post('/', (req, res)=>{
    res.json(req.body)
});

module.exports = router;