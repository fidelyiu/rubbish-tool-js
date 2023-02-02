import { dateGetStr1 } from '../../src/Date'

test('adds 1 + 2 to equal 3', () => {
    expect(dateGetStr1(new Date(1675304008334))).toBe('2023年02月')
})
