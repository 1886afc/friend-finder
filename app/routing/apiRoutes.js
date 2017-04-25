// linking our routes to  data sources
// these data sources hold arrays containging friends info



var friendsData = require("../data/friends.js");

//ROUTING

module.exports = function(app) {
	//API GEt requests that will be used to display a json of all posible friends
	app.get("/api/friends", function(req, res) {
		res.json(friendsData);
	});

	// the code 
	app.post("/api/friends", function(req, res) {
		var newFriend = req.body;
		console.log(newFriend);
		friendsData.push(newFriend);

		res.json(newFriend);

	});
};