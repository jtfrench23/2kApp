const Game = require('../models/game.model'); 

module.exports.createGame = (request, response) => {
    // Mongoose's "create" method is run using our Game model to add a new Game to our db's Game collection.
    // request.body will contain something like {firstName: "Billy", lastName: "Washington"} from the client
    Game.create(request.body) //This will use whatever the body of the client's request sends over
        .then(game => response.json(game))
        .catch(err => response.json(err));
}


module.exports.getAllGames = (request, response) => {
    Game.find({})
        .then(games => {
            console.log(games); //console logs are optional, but they are highly recommended for troubleshooting!
            response.json(games);
        })
        .catch(err => {
            console.log(err)
            response.json(err)
        })
}