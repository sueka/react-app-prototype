import mapValues from './mapValues'

describe('mapValues', () => {
  it('should map values of the record', () => {
    expect(mapValues({}, (x) => x * 2)).toEqual({})
    expect(mapValues({ foo: 1, bar: 2 }, (x) => x * 2)).toEqual({ foo: 2, bar: 4 })
  })
})
