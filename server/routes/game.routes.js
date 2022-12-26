const GameController = require('../controllers/Game.controller');  //Import the code from Code Block 1
module.exports = (app) => {
    app.get('/api', GameController.index);
    app.post('/api/people', GameController.createGame); 
}