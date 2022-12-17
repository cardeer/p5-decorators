import BaseModule from './BaseModule'

export class BaseCanvas {
  public modules = {}

  public start() {}

  public register<M extends { new (): BaseModule }>(module: M) {
    const M2 = new module()
    this.modules[M2.type] = M2.draw
  }
}
