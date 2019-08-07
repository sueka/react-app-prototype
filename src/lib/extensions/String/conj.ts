import { UnreachableError } from 'src/lib/errors'
import typed from 'src/lib/typed'

/**
 * @throw {TypeError} if the size of {xs} is less than two.
 *
 * @example
 * conj(', ', ' or ', ['A', 'B', 'C']) // 'A, B or C'
 */
export default function conj(separator: string, lastSeparator: string, xs: string[]): string {
  if (xs.length < 2) {
    throw new TypeError(typed<[string]>`The size of ${ xs.toString() } is less than two.`)
  }

  const lastX = xs.pop() // tslint:disable-line:no-array-mutation

  if (lastX === undefined) {
    throw new UnreachableError()
  }

  return typed<[string, string, string]>`${ xs.join(separator) }${ lastSeparator }${ lastX }`
}