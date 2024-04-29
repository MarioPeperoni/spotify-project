const express = require('express');
const http = require('http');
const cors = require('cors');
const { Server } = require('socket.io');

const corsOptions = {
  origin: 'http://127.0.0.1:5173/',
};

const app = express();
app.use(cors(corsOptions));

const server = http.createServer(app);
const io = new Server(server);

app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/index.html`);
});

app.get('/test', (req, res) => {
  res.send('Hello World');
});

io.on('connection', (socket) => {
  console.log('A user connected');
});

const PORT = 8080;
server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
