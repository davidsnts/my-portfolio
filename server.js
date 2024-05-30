const express = require('express');

const app = express();

const api = require('./backend/routes');

app.get('/',(req, res)=>{
    res.json({
        'success' : true
    });
});

app.use('/api', api);

const PORT = 3080;

app.listen(PORT);