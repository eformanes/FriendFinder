// Dependencies
var path = require("path");
var friendData = require("../data/friends.js");

// Export routes to be used in server.js Express server.
module.exports = function(app) {
    // ROUTING NOTES
    // survey => submit button grabs survey data calls script => post to /api/friends => 
    // Post api/friends takes in user survey form and finds best friend match =>
    // Post api/friends also adds new friend to the friendData array => 
    // Post api/friends returns best match friend object =>  Return best match friend object
    // jQuery to update modal body/contents =>  Display modal

  // Get /api/friends call returns friend array
  app.get("/api/friends", function(req, res) {
    res.json(friendData);
});

  // Find best friend match, add new friend to array, return best match
  app.post("/api/friends", function(req, res) {
    //  Assign request
    var newFriendRequest = req.body;


    //Logic to find friend
    // Step 1)  Pull Scores for each friend (1st loop)
    // Step 2)  Absolute value difference for the last entry (newest friend) and all previous entries and store in compareResults array
    // Step 3)  Find lowest value and return the object
    
    //TRYING TO FIGURE OUT WHAT ARRAY IS CALLED!!!!
    // for(var key in newFriendRequest){
    //   //console.log(newFriendRequest[key]);
    //   console.log(key);
    // }
    
    //console.log(newFriendRequest['scores[]'][0]);
    //  How to address the array in the object!!!!!!!!!!
    //  NEED TO USE BRACKET NOTATION!!!!!!!!!!
    //console.log(newFriendRequest['scores[]']);

    // console.log("Friend Data array length is " + friendData.length);

    // for(var i=0; i < friendData.length;i++){
    //     for(var j=0; friendData[i].scores.length; j++){
    //         compareResultsArray[j] = Math.abs(newFriendRequest.scores[j] - friendData[i]['scores[]'][j]);
    //     }
    // }
/////////////////////////////////////////////////////////////////////////////
    // initialize the current best friend
var currentBestFriendIndex = 0;
// initialize the bestFriendDifference score
var bestFriendScore = 999;

// i is the current friend for comparison	
for(var i= 0; i<friendData.length; i++){
	//initialize totalDifference for each friend
	var totalDifference = 0;
  
  console.log(friendData);

	// inner loop iterator j is each score index for current friend I and newFriend. 
	// inner loop purpose is to iterate through all survey results and update the totalDifference
	for(var j = 0; j<newFriendRequest['scores[]'].length; j++){
		totalDifference += Math.abs(parseInt(friendData[i]['scores[]'][j]) - parseInt(newFriendRequest['scores[]'][j]))
	}
  
  //
  console.log("Total Difference for current friend " + i + " is " + totalDifference);
  console.log("Record for BestFriend Score is " + bestFriendScore);

	//  check if currentFriend has a lower score.  If so, update to be the new best friend
	if(totalDifference < bestFriendScore){
		bestFriendScore = totalDifference;
		currentBestFriendIndex = i;
	}
	
	
}

// outside of outer loop, comparisons are complete
// print out the currentFriend
console.log("Best Friend is below");
console.log(friendData[currentBestFriendIndex]);

// at the very end add newFriendRequest to the friendData array
friendData.push(newFriendRequest);

console.log("Contents of friendData array")
console.log(friendData);
///////////////////////////////////////////////

    //console.log(compareResultsArray);

    // Add new friend to the friendData array before returning friend match
    //friendData.push(newFriendRequest);
    
    // !! Change line below to return matched friend!!
    //res.json(friendData);
    res.send(friendData[currentBestFriendIndex]);
  });


};