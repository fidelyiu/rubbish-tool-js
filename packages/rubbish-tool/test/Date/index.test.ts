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
} from '../../src'

describe('时间测试', () => {
    describe('格式化', () => {
        test('YYYY年MM月', () => {
            expect(dateGetStr1(new Date(1675304008334))).toBe('2023年02月')
        })

        test('YYYY年', () => {
            expect(dateGetStr2(new Date(1675304008334))).toBe('2023年')
        })

        test('MM月', () => {
            expect(dateGetStr3(new Date(1675304008334))).toBe('02月')
        })

        test('YYYY-第Q季', () => {
            expect(dateGetStr4(new Date(1675304008334))).toBe('2023年-第1季')
        })

        test('YYYY年MM月DD日', () => {
            expect(dateGetStr5(new Date(1675304008334))).toBe('2023年02月02日')
        })

        test('YYYY年MM月DD日 HH:mm:ss', () => {
            expect(dateGetStr6(new Date(1675304008334))).toBe(
                '2023年02月02日 10:13:28'
            )
        })

        test('YY-MM', () => {
            expect(dateGetStr7(new Date(1675304008334))).toBe('23-02')
        })

        test('第Q季', () => {
            expect(dateGetStr8(new Date(1675304008334))).toBe('第1季')
        })

        test('YYYY/MM/DD', () => {
            expect(dateGetStr9(new Date(1675304008334))).toBe('2023/02/02')
        })

        test('YYYY-MM-DD', () => {
            expect(dateGetStr10(new Date(1675304008334))).toBe('2023-02-02')
        })
    })
})
