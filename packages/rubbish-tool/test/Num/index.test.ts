import { numGetCeil, numGetFloor, numGetRound } from '../../src'

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
                expect(numGetRound(0.004, 2)).toBe(0)
            })
            test('五入', () => {
                expect(numGetRound(15.555, 2)).toBe(15.56)
                expect(numGetRound(0.005, 2)).toBe(0.01)
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
        test('方法传入', () => {
            expect(numGetRound(155, 12.5)).toBe(NaN)
            expect(numGetRound(155, '??' as unknown as number)).toBe(NaN)
        })
    })
    describe('向下取整', () => {
        describe('保留0位小数', () => {
            expect(numGetFloor(15.4)).toBe(15)
            expect(numGetFloor(15.5)).toBe(15)
        })
        describe('保留1位小数', () => {
            expect(numGetFloor(15.44, 1)).toBe(15.4)
            expect(numGetFloor(15.55, 1)).toBe(15.5)
        })
        describe('保留2位小数', () => {
            expect(numGetFloor(15.444, 2)).toBe(15.44)
            expect(numGetFloor(15.555, 2)).toBe(15.55)
        })
        describe('保留10位数', () => {
            expect(numGetFloor(155.444, -1)).toBe(150)
            expect(numGetFloor(155.555, -1)).toBe(150)
        })
        describe('保留百位数', () => {
            expect(numGetFloor(155.444, -2)).toBe(100)
            expect(numGetFloor(155.555, -2)).toBe(100)
        })
        test('方法传入', () => {
            expect(numGetFloor(155, 12.5)).toBe(NaN)
            expect(numGetFloor(155, '??' as unknown as number)).toBe(NaN)
        })
    })
    describe('向上取整', () => {
        describe('保留0位小数', () => {
            expect(numGetCeil(15.4)).toBe(16)
            expect(numGetCeil(15.5)).toBe(16)
        })
        describe('保留1位小数', () => {
            expect(numGetCeil(15.44, 1)).toBe(15.5)
            expect(numGetCeil(15.55, 1)).toBe(15.6)
        })
        describe('保留2位小数', () => {
            expect(numGetCeil(15.444, 2)).toBe(15.45)
            expect(numGetCeil(15.555, 2)).toBe(15.56)
        })
        describe('保留10位数', () => {
            expect(numGetCeil(155.444, -1)).toBe(160)
            expect(numGetCeil(155.555, -1)).toBe(160)
        })
        describe('保留百位数', () => {
            expect(numGetCeil(155.444, -2)).toBe(200)
            expect(numGetCeil(155.555, -2)).toBe(200)
        })
        test('方法传入', () => {
            expect(numGetCeil(155, 12.5)).toBe(NaN)
            expect(numGetCeil(155, '??' as unknown as number)).toBe(NaN)
        })
    })
})
