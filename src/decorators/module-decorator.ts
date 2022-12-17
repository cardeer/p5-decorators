import p5 from 'p5'

export function Module<T extends keyof p5>(type: T) {
  return function <T extends { new (...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
      public type: string = type

      constructor(...args: any[]) {
        super(args)
      }
    }
  }
}
