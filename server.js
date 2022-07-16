
const express = require('express');

//API routes 
const apiRoutes = require('./routes/apiRoutes')
const htmlRoutes = require('./routes/htmlRoutes')

const PORT = process.env.PORT || 3001;
//initiate the server 
const app = express();

// Middleware 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

//linking routes to server 
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

//use local or heroku server
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});


