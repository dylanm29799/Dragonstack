const express = require("express");
const genengine = require("./generation/engine");
const dragonRouter = require("./api/dragon");
const generationRouter = require("./api/generation");
const app = express();

const engine = new genengine();
const port = 3000;
app.listen(port, () => console.log(`listening on port ${port}`));

//Using Express Application to store  engine
app.locals.engine = engine;
app.use("/dragon", dragonRouter);
app.use("/generation", generationRouter);
engine.start();

exports.app = { app };
