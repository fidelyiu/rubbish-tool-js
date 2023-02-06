import { numGetRound } from '../../src'

describe('数字测试', () => {
    describe('四舍五入', () => {
        describe('保留0位小数', () => {
            test('四舍', () => {
                expect(numGetRound(15.4)).toBe(15)
            })
            test('五入', () => {
                expect(numGetRound(15.5)).toBe(16)
            })
        })
        describe('保留1位小数', () => {
            test('四舍', () => {
                expect(numGetRound(15.44, 1)).toBe(15.4)
            })
            test('五入', () => {
                expect(numGetRound(15.55, 1)).toBe(15.6)
            })
        })
        describe('保留2位小数', () => {
            test('四舍', () => {
                expect(numGetRound(15.444, 2)).toBe(15.44)
            })
            test('五入', () => {
                expect(numGetRound(15.555, 2)).toBe(15.56)
            })
        })
        describe('保留10位数', () => {
            test('四舍', () => {
                expect(numGetRound(12.44, -1)).toBe(10)
            })
            test('五入', () => {
                expect(numGetRound(15.55, -1)).toBe(20)
            })
        })
        describe('保留百位数', () => {
            test('四舍', () => {
                expect(numGetRound(144, -2)).toBe(100)
            })
            test('五入', () => {
                expect(numGetRound(155, -2)).toBe(200)
            })
        })
    })
})
