const express = require('express');
const app = express();

// अपनी API Key यहाँ सेट करें
const MY_API_KEY = process.env.API_KEY || "mera_secret_key_8930";

// API Key चेक करने का नियम
app.use((req, res, next) => {
  const userKey = req.headers['x-api-key'] || req.query.api_key;
  if (userKey !== MY_API_KEY) {
    return res.status(401).json({ error: "Galat ya missing API Key!" });
  }
  next();
});

// आपका मुख्य API रूट
app.get('/', (req, res) => {
  res.json({ message: "API Key sahi hai! Server chal raha hai." });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
