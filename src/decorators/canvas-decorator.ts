import p5 from 'p5'
import { BaseCanvas } from '../BaseCanvas'

export function Canvas(selector?: string) {
  return function <T extends { new (...args: any[]): BaseCanvas }>(
    constructor: T
  ) {
    return class extends constructor {
      public start() {
        let element: HTMLElement | null = null

        if (selector) {
          element = document.querySelector(selector)
        }

        const keys = Object.keys(this.modules)

        const sketch = (s: p5) => {
          keys.forEach((key) => {
            s[key] = () => this.modules[key](s)
          })
        }

        new p5(sketch, element || document.body)
      }
    }
  }
}
