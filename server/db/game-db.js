class Database {
  games = [];

  getGame(gameId){
    this.games.find(game => game.gameId === gameId);
  };

  createGame(owner) {
    gameId = crypto.randomUUID();
    games.push({gameId, players: [owner]});
  };
  
  updateGame(gameId, newGameData) {
    games.map(game => game.gameId === gameId ? newGameData : game);
  };

  deleteGame(gameId) {
    games.filter(game => game.gameId !== gameId);
  };
}

export const database = new Database();