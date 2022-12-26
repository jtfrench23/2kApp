const Game = require('../models/game.model'); 
module.exports.index = (request, response) => {  //We are exporting a key:val pair of index : function
    response.json({     // This is where we're setting the API's response to the requesting client
        message: "Hello World"
    });
}

module.exports.createGame = (request, response) => {
    // Mongoose's "create" method is run using our Game model to add a new Game to our db's Game collection.
    // request.body will contain something like {firstName: "Billy", lastName: "Washington"} from the client
    Game.create(request.body) //This will use whatever the body of the client's request sends over
        .then(game => response.json(game))
        .catch(err => response.json(err));
}