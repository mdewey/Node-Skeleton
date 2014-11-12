// set variables for environment
var express = require('express');
var app = express();
var path = require('path');



// routes
require('./app/routes.js')(app);

// views as directory for all template files
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs'); // use either jade or ejs       
// instruct express to server up static assets
app.use(express.static('public'))

// Set server port
app.listen(process.env.PORT || 8181);
console.log('server is running');

