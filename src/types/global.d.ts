type ResultType<T extends Promise<unknown>> = T extends Promise<infer U> ? U : never

type JsonPrimitive = null | boolean | number | string
type JsonArray = readonly Json[]
type JsonObject = { [member in string]: Json }
type Json = JsonPrimitive | JsonArray | JsonObject

type EmptyRecord<T> = Record<keyof T, never>

type Index = keyof any // tslint:disable-line:no-any

type Method<T extends (that: never, ...args: never[]) => unknown> = T extends (that: infer U, ...args: infer V) => infer W ? (this: U, ...args: V) => W : never

type Direction = 'ltr' | 'rtl' // FIXME: 'auto' が要りそう

type SortOrder = 'ascending' | 'descending'

interface Sort<T> {
  by: keyof T
  in: SortOrder
}

declare namespace Alt {
  type Extract<T, U extends T> = T extends U ? T : never
  type Exclude<T, U extends T> = T extends U ? never : T
  type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>
  type SoftOmit<T, K extends keyof T> = T & { [key in K]: never }
  type ForceOmit<T, K extends Index> = Omit<T, K & keyof T> // NOTE: 実際には Alt ではないが Omit との関聯が分かりやすいようにここに置いている
}

declare namespace string {
  type Url = string & { _urlBrand: never }
}

declare namespace React {
  type PropsOf<T> = T extends React.ComponentType<infer P> ? P : never
}
