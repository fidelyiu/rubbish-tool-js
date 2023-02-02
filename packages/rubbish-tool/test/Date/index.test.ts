import {
    dateGetStr1,
    dateGetStr10,
    dateGetStr2,
    dateGetStr3,
    dateGetStr4,
    dateGetStr5,
    dateGetStr6,
    dateGetStr7,
    dateGetStr8,
    dateGetStr9,
} from '../../src/Date'

test('时间测试 YYYY年MM月', () => {
    expect(dateGetStr1(new Date(1675304008334))).toBe('2023年02月')
})

test('时间测试 YYYY年', () => {
    expect(dateGetStr2(new Date(1675304008334))).toBe('2023年')
})

test('时间测试 MM月', () => {
    expect(dateGetStr3(new Date(1675304008334))).toBe('02月')
})

test('时间测试 YYYY-第Q季', () => {
    expect(dateGetStr4(new Date(1675304008334))).toBe('2023年-第1季')
})

test('时间测试 YYYY年MM月DD日', () => {
    expect(dateGetStr5(new Date(1675304008334))).toBe('2023年02月02日')
})

test('时间测试 YYYY年MM月DD日 HH:mm:ss', () => {
    expect(dateGetStr6(new Date(1675304008334))).toBe('2023年02月02日 10:13:28')
})

test('时间测试 YY-MM', () => {
    expect(dateGetStr7(new Date(1675304008334))).toBe('23-02')
})

test('时间测试 第Q季', () => {
    expect(dateGetStr8(new Date(1675304008334))).toBe('第1季')
})

test('时间测试 YYYY/MM/DD', () => {
    expect(dateGetStr9(new Date(1675304008334))).toBe('2023/02/02')
})

test('时间测试 YYYY-MM-DD', () => {
    expect(dateGetStr10(new Date(1675304008334))).toBe('2023-02-02')
})
