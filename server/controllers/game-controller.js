import express from 'express';
import { database } from '../db/game-db';

export const gameRoutes = express.Router();

// user creates game lobby
gameRoutes.route('/create-game').post(async (req, res) => {
  try {
    // {
    //   name:
    //   score:
    //   guessed:
    // }
    const gameOwner = req.body;

    const gameData = database.createGame(gameOwner);
    res.status(200).send(gameData);

  } catch (e) {
    console.log(e);
    res.status(500).send(e);
  }
});

// if user connects for the first time
gameRoutes.route('/game/:id').put(async (req, res) => {
  try {
    const gameId = req.params.id;
    const newPlayer = req.body;

    const gameData = database.getGame(gameId);
    gameData.players.push(newPlayer);
    updateGame(gameData);
    res.status(200).send(gameData);

  } catch (e) {
    console.log(e);
    res.status(500).send(e);
  }
});

// if user reconnects
gameRoutes.route('/game/:id').get(async (req, res) => {
  try {
    const gameId = req.params.id;

    const gameData = database.getGame(gameId);
    res.status(200).send(gameData);

  } catch (e) {
    console.log(e);
    res.status(500).send(e);
  }
});

// game is deleted when the last player leaves
gameRoutes.route('/game/:id').delete(async (req, res) => {
  try {
    const gameId = req.params.id;

    database.deleteGame(gameId);
    res.status(204).send();

  } catch (e) {
    console.log(e);
    res.status(500).send(e);
  }
});

