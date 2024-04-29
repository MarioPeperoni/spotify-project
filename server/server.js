import { routes } from "./routes";

const express = require('express');
const http = require('http');
const cors = require('cors');
const { Server } = require('socket.io');

const PORT = 8080;

const app = express();
const server = http.createServer(app)
app.use(cors());
app.use(routes);

const io = new Server(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST'],
  },
});

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

io.on('connection', (socket) => {
  console.log('A user connected');
});