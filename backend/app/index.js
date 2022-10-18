const express = require("express");
const generationEngine = require("./generation/generationEngine");

const app = express();

const GenerationEngine = new generationEngine();

GenerationEngine.start();

app.get("/dragon/new", (req, res) => {
  res.json({ dragon: GenerationEngine.generation.newDragon() });
});

module.exports = app;
