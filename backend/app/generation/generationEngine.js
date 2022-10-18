const Generation = require(".");

class generationEngine {
  constructor() {
    this.generationEngine = null;
    this.timer = null;
  }

  start() {
    this.generationEngineTest();
  }

  stop() {
    clearTimeout(this.timer);
  }
  generationEngineTest() {
    this.generation = new Generation();

    console.log("new generation", this.generation);

    this.timer = setTimeout(
      () => this.generationEngineTest(),
      this.generation.expiration.getTime() - Date.now()
    );
  }
}

module.exports = generationEngine;
