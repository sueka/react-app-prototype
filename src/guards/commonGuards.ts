import identity from '~/identity'

export const isOneOf = <T extends readonly Json[]>(...options: T) => (input: unknown): input is T[number] => options.some((option) => option === input)

export const optional = <A extends unknown, T extends A>(isT: (input: A) => input is T) => (input: A | undefined): input is T | undefined => {
  if (input === undefined) {
    return true
  }

  return isT(input)
}

export const isObject = <A extends B, T extends A, B = A>(isT: (input: B) => Record<keyof A, boolean>) => (input: A): input is T => {
  return Object.values<boolean>(isT(input)).every(identity)
}
