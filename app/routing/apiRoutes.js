// linking our routes to  data sources
// these data sources hold arrays containging friends info



var friendsData = require("../data/friends.js");

//ROUTING

module.exports = function(app) {
	//API GEt requests that will be used to display a json of all posible friends
	app.get("/api/friends", function(req, res) {
		res.json(friendsData);
	});

	//  code for pushing new friend to friendsData array and determine best match 
	app.post("/api/friends", function(req, res) {
		var newFriend = req.body;
		console.log(newFriend);
		
		res.json(newFriend);
		// holds best match

		var bestMatch = {
			name: "",
			photo: "",
			friendDiff: 1000
		};

		// users survey results
		var userName = newFriend.name;
		var photo = newFriend.photo;
		var score = newFriend.scores;

		// calculating the diff of users scores and those in the database
		var totalDiff = 0;

		//loop for all the users in the array
		for (var i = 0; i < friendsData.length; i++) {
			// console.log(friendsData[i].name);
			// console.log(friendsData[i].photo);
			totalDiff = 0;

			//looping through all the scores
			for (var j = 0; j < friendsData[i].scores[j]; j++) {
				//calculating totalDiff between scores
				totalDiff += Math.abs(
					parseInt(score[j])-
					parseInt(friendsData[i].scores[j]));

				if (totalDiff <= bestMatch.friendDiff) {

					bestMatch.name = friendsData[i].name;
					bestMatch.photo = friendsData[i].photo;
					bestMatch.friendDiff = totalDiff;
					console.log("best match   " + JSON.stringify(bestMatch));
				}

				
			}
		}
		//puches new user to database
		friendsData.push(newFriend);
		//returns json of best match to be used for html
		res.json(bestMatch);
	});
};