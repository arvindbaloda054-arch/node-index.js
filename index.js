const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('API Server chal raha hai!');
});

app.listen(PORT, () => {
  console.log(`Server http://localhost:${PORT} par chal raha hai`);
});