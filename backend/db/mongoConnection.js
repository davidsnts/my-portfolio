const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URL_CONNECT);
mongoose.connection.on('connected', () => {
    console.log("Conected to MongoDB");
});