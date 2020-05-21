export default function hashCode<T extends boolean | number | string>(xs: T[]) {
  // tslint:disable-next-line:no-let
  let result = 1n

  // tslint:disable-next-line:no-loop-statement
  for (const x of xs) {
    result = result * 31n + BigInt(x.hashCode())
  }

  return Number(BigInt.asIntN(32, result))
}
