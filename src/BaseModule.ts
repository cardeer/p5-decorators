import p5 from 'p5'

export abstract class BaseModule {
  public type: string = ''
  public abstract render(s: p5): void
}
