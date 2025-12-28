/*
Requisitos: Deve ter métodos `start()`, `stop()`, `reset()` e uma propriedade `duration`.

 **Regras:** Não pode chamar start duas vezes seguidas (erro), nem stop duas vezes. `duration` não deve ser alterável manualmente de fora.
*/
class StopWatch {
  private _duration: number = 0;
  private _startTime: number = 0;

  get duration(): number {
    return this._duration;
  }

  start() {
    if (this._startTime !== 0)
      throw new Error('The stop watch has already been started!');
    this._duration = 0;
    this._startTime = Date.now();
  }
  stop() {
    if (this._startTime === 0)
      throw new Error('The stop watch has not been started!');
    this._duration = (Date.now() - this._startTime) / 1000;
    this._startTime = 0;
  }
  reset() {
    this._duration = 0;
    this._startTime = 0;
  }
}

const sw = new StopWatch();
sw.start();
setTimeout(() => {
  console.log(`teste`);

  sw.stop();

  console.log(sw.duration);
}, 5000);
