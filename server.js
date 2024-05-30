const express = require('express');
const bodyParser = require('body-parser');


const app = express();
app.use(bodyParser.json());

const api = require('./backend/routes');

app.get('/',(req, res)=>{
    res.json({
        'success' : true
    });
});

app.use('/api', api);

const PORT = 3080;

app.listen(PORT);