import p5 from 'p5'

export default abstract class BaseModule {
  public type: string = ''
  public abstract draw(s: p5): void
}
