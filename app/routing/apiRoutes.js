// ===============================================================================
// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
// ===============================================================================
var path = require("path");
var friendData = require("../data/friends.js");


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
    // ROUTING NOTES
    // survey => submit button grabs survey data calls script => post to /api/friends => 
    // Post api/friends adds new friend to the friendData array=> 
    // Figure out logic for friend match =>  Return best match friend object
    // =>  Display modal

  app.get("/api/friends", function(req, res) {
    //res.sendFile(path.join(__dirname, "../public/home.html"));
    res.json(friendData);
});

  app.post("/api/friends", function(req, res) {
    //res.sendFile(path.join(__dirname, "../public/survey.html"));
    
    var newFriendRequest = req.body;

    //initialize compareResults array
    var compareResultsArray = [];

    //Logic to find friend
    // Step 1)  Pull Scores for each friend (1st loop)
    // Step 2)  Absolute value difference for the last entry (newest friend) and all previous entries and store in compareResults array
    // Step 3)  Find lowest value and return the object
    console.log(newFriendRequest);

    // for(var i=0; i < friendData.length - 1;i++){
        
    //     for(var j=0; friendData[i].scores.length -1; j++){
    //         compareResultsArray[j] = Math.abs(newFriend.scores[j] - friendData[i].scores[j]);
    //     }
    // }

    console.log(compareResultsArray);

    // Add new friend to the friendData array before returning friend match
    friendData.push(newFriendRequest);
    
    // !! Change line below to return matched friend!!
    res.json(friendData);
  });


};