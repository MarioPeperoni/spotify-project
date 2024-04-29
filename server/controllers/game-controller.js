import express from 'express';
import { database } from '../db/game-db';

export const gameRoutes = express.Router();

gameRoutes.route('/create-game').post(async (req, res) => {
  // {
  //   name:
  //   score:
  //   guessed:
  // }
  const gameOwner = req.body;
  database.createGame(gameOwner);
});

// if user connects for the first time
gameRoutes.route('/game/:id').put(async (req, res) => {
  const gameId = req.params.id;
  const newPlayer = req.body;

  const gameData = database.getGame(gameId);
  gameData.players.push(newPlayer);
  updateGame(gameData);
});

// if user reconnects
gameRoutes.route('/game/:id').get(async (req, res) => {
  const gameId = req.params.id;

  const gameData = database.getGame(gameId);
  updateGame(gameData);
});

