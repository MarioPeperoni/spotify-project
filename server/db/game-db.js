class Database {
  songs = ['song1', 'song2', 'song3', 'song4', 'song5', 'song6']
  games = [];

  getGame(gameId) {
    this.games.find(game => game.gameId === gameId);
  };

  createGame(owner) {
    gameId = crypto.randomUUID();
    games.push({gameId, players: [owner], started: false, currentRound: 1, url: gameId});
  };
  
  updateGame(gameId, newGameData) {
    games.map(game => game.gameId === gameId ? newGameData : game);
  };

  deleteGame(gameId) {
    games.filter(game => game.gameId !== gameId);
  };
}

export const database = new Database();