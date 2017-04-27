// npm packages needed
var express = require("express");
var bodyParser = require("body-parser");

// Express config

// tells node we are creating an express server
var app = express();

// setting port we will be listening on
var port = process.env.PORT || 3000;

// bodyParser allows for our server to interpret data sent to it.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

//ROUTER
//points server to the route files, they serve as a map for users who visit or request data from urls
//=================================================================
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// LISTENER
// code below starts server

app.listen(port, function() {
  console.log("App listening on PORT: " + port);
});
