const { Router } = require("express");
const app = require("..");

const router = new Router();

router.get("/new", (req, res) => {
  res.json({ dragon: req.app.locals.engine.generation.newDragon() });
});

module.exports = router;
