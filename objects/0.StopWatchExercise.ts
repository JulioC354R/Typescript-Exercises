// **Requisitos:** Deve ter métodos `start()`, `stop()`, `reset()` e uma propriedade `duration`.

// - **Regras:** Não pode chamar start duas vezes seguidas (erro), nem stop duas vezes. `duration` não deve ser alterável manualmente de fora.

class StopWatch {
  duration: number;
  start: Function;
  stop: Function;
  reset: Function;

  constructor() {
    this.duration = 0;
    let startTime = 0;

    this.start = function () {
      if (startTime !== 0)
        throw new Error('The stop watch has already been started!');
      this.duration = 0;
      startTime = Date.now();
    };
    this.stop = function () {
      if (startTime === 0)
        throw new Error('The stop watch has not been started!');
      this.duration = (Date.now() - startTime) / 1000;
      startTime = 0;
    };
    this.reset = function () {
      this.duration = 0;
      startTime = 0;
    };
  }
}

const sw = new StopWatch();
sw.start();
setTimeout(() => {
  console.log(`teste`);

  sw.stop();

  console.log(sw.duration);
}, 5000);
