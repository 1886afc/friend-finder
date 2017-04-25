// npm packages needed
// path is needed in order to get the correct file path for the html

var path = require("path");

// exporting the html
module.exports = function(app) {

	 app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/survey.html"));
  	});

	 app.use(function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/home.html"));
  	});
};