const GameController = require('../controllers/Game.controller');  //Import the code from Code Block 1
module.exports = (app) => {
    app.post('/api/game', GameController.createGame); 
    app.get('/api/games', GameController.getAllGames);
}