import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

const App = () => {
  const [socket] = useState(io(':8000'));

  useEffect(() => {
    console.log("Is this running");

    socket.on("welcome", data => {
      console.log("What's going on?");
    });
  }, [socket]);

  return (
    <div className="App">
      <h1>Hello, React!</h1>
    </div>
  );
}

export default App;
