const express = require("express");
const notes = require("./data/notes");
const dotenv = require("dotenv");
const app = express();
dotenv.config();

app.get("/", (req, res) => {
  res.send(`API is running....`);
});
app.get("/api/notes", (req, res) => {
  res.json(notes);
});

app.get("/api/notes/:id", (req, res) => {
  const singleNote = notes.find((n) => n._id === req.params.id);
  res.send(singleNote);
});

const PORT = process.env.PORT || 2020;

app.listen(PORT, console.log(`Server started on port ${PORT}`));
