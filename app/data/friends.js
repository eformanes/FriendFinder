

//  Array that holds friends (name, photo URL, survey answers)
//  Odd bracket notation used due to really odd behavior that posting an array within survey.html names the array with the bracket notation.  Need this to be consistent with what is posted by the API.
var friendsArray = [
{
    "name":"eee",
    "photo":"https://i.pinimg.com/originals/cd/89/7a/cd897ae77747e237180503a353fc31c6.jpg",
    "scores[]":[
        5,
        1,
        4,
        4,
        5,
        1,
        2,
        5,
        4,
        1
      ]
  }
];

// Make this array available to other files that require friends.js
module.exports = friendsArray;