body {
  font-family: 'Segoe UI', sans-serif;
  background: #1e1e2f;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
}

.container {
  text-align: center;
  background: #2e2e3e;
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 0 20px #000;
  width: 100%;
  max-width: 500px;
}

h1 {
  margin-bottom: 20px;
  font-size: 2rem;
}

.timer {
  font-size: 3rem;
  margin: 20px 0;
  letter-spacing: 2px;
  font-weight: bold;
}

.buttons button {
  margin: 10px;
  padding: 10px 20px;
  font-size: 1rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  background-color: #4c66f1;
  color: white;
  transition: background 0.3s;
}

.buttons button:hover {
  background-color: #3d52c4;
}

ul#laps {
  list-style: none;
  padding: 0;
  margin-top: 20px;
  max-height: 200px;
  overflow-y: auto;
}

#laps li {
  background: #39394a;
  margin: 5px 0;
  padding: 8px;
  border-radius: 6px;
  display: flex;
  justify-content: space-between;
}

.lap-time {
  font-size: 0.9rem;
  color: #f4a261;
}

@media (max-width: 500px) {
  .timer {
    font-size: 2.5rem;
  }

  .buttons button {
    width: 100%;
    font-size: 1.2rem;
  }
}
