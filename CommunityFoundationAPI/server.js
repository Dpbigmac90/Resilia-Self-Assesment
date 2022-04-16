// Require project dependencies
const express = require('express');
const bodyParser = require('body-parser');

// Require notifications routes
const notificationRoutes = require('./src/routes/notification.routes');

// create express app
const app = express();
// Setup server port
const port = process.env.PORT || 4000;

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
// parse requests of content-type - application/json
app.use(bodyParser.json())

// Configuring the database
const dbConfig = require('./config/db.config.js');
const mongoose = require('mongoose');
const res = require('express/lib/response');
mongoose.Promise = global.Promise;

// Connecting to the database
mongoose.connect(dbConfig.url, {
useNewUrlParser: true
}).then(() => {
  console.log("Successfully connected to the database");
}).catch(err => {
  console.log('Could not connect to the database.', err);
  process.exit();
});

// using as middleware
app.use('/CommunityOutreach/notifications', notificationRoutes)


// listen for requests
app.listen(port, () => {
   console.log(`Node server is listening on port ${port}`);
});