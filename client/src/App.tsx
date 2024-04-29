import { useEffect, useState } from 'react';
import { io } from 'socket.io-client';
import axios from 'axios';

export default function App() {
  const [count, setCount] = useState(0);

  const socket = io('http://localhost:8080');

  useEffect(() => {
    console.log('send socket message to server');
    axios.get('http://localhost:8080/test').then((res) => {
      console.log(res.data);
    });
    socket.emit('connection');
  }, [count]);

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
      <p className=" text-3xl">Yooo</p>
    </>
  );
}