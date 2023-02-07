import { numGetCeil, numGetFloor, numGetRound } from '../../src'

describe('数字测试', () => {
    describe('四舍五入', () => {
        describe('保留0位小数', () => {
            test('四舍', () => {
                expect(numGetRound(15.4)).toBe(15)
                expect(numGetRound(1.54e1)).toBe(15)
                expect(numGetRound(1.332115612191919e12)).toBe(
                    1.332115612192e12
                )
            })
            test('五入', () => {
                expect(numGetRound(15.5)).toBe(16)
                expect(numGetRound(1.55e1)).toBe(16)
            })
        })
        describe('保留1位小数', () => {
            test('四舍', () => {
                expect(numGetRound(15.44, 1)).toBe(15.4)
                expect(numGetRound(1.544e1, 1)).toBe(15.4)
            })
            test('五入', () => {
                expect(numGetRound(15.55, 1)).toBe(15.6)
                expect(numGetRound(1.555e1, 1)).toBe(15.6)
            })
        })
        describe('保留2位小数', () => {
            test('四舍', () => {
                expect(numGetRound(15.444, 2)).toBe(15.44)
                expect(numGetRound(1.5444e1, 2)).toBe(15.44)
                expect(numGetRound(0.004, 2)).toBe(0)
                expect(numGetRound(4e-3, 2)).toBe(0)
            })
            test('五入', () => {
                expect(numGetRound(15.555, 2)).toBe(15.56)
                expect(numGetRound(1.5555e1, 2)).toBe(15.56)
                expect(numGetRound(0.005, 2)).toBe(0.01)
                expect(numGetRound(5e-3, 2)).toBe(0.01)
            })
        })
        describe('保留10位数', () => {
            test('四舍', () => {
                expect(numGetRound(12.44, -1)).toBe(10)
                expect(numGetRound(1.244e1, -1)).toBe(10)
            })
            test('五入', () => {
                expect(numGetRound(15.55, -1)).toBe(20)
                expect(numGetRound(1.555e1, -1)).toBe(20)
            })
        })
        describe('保留百位数', () => {
            test('四舍', () => {
                expect(numGetRound(144, -2)).toBe(100)
                expect(numGetRound(1.44e2, -2)).toBe(100)
            })
            test('五入', () => {
                expect(numGetRound(155, -2)).toBe(200)
                expect(numGetRound(1.55e2, -2)).toBe(200)
            })
        })
        describe('保留e位小数', () => {
            test('四舍', () => {
                expect(numGetRound(1.332115612191911e1, 13)).toBe(
                    1.33211561219191e1
                )
                expect(numGetRound(1.2646541714646516e33, -33)).toBe(1e33)
            })
            test('五入', () => {
                expect(numGetRound(1.332115612191919e1, 13)).toBe(
                    1.33211561219192e1
                )
                expect(numGetRound(1.5646541714646516e33, -33)).toBe(2e33)
            })
        })
        describe('超精度保留', () => {
            test('四舍', () => {
                expect(numGetRound(1.2646541714646516e33, -33)).toBe(1e33)
                expect(numGetRound(1.2646541714646516e33, -1)).toBe(
                    1.2646541714646516e33
                )
            })
            test('五入', () => {
                expect(numGetRound(1.5646541714646516e33, -33)).toBe(2e33)
                expect(numGetRound(1.5646541714646516e33, -1)).toBe(
                    1.5646541714646516e33
                )
            })
        })
        test('方法传入', () => {
            expect(numGetRound(155, 12.5)).toBe(NaN)
            expect(numGetRound(1.55e2, 12.5)).toBe(NaN)
            expect(numGetRound(155, '??' as unknown as number)).toBe(NaN)
            expect(numGetRound(1.55e2, '??' as unknown as number)).toBe(NaN)
        })
    })
    describe('向下取整', () => {
        describe('保留0位小数', () => {
            expect(numGetFloor(15.4)).toBe(15)
            expect(numGetFloor(1.54e1)).toBe(15)
            expect(numGetFloor(15.5)).toBe(15)
            expect(numGetFloor(1.55e1)).toBe(15)
        })
        describe('保留1位小数', () => {
            expect(numGetFloor(15.44, 1)).toBe(15.4)
            expect(numGetFloor(1.544e1, 1)).toBe(15.4)
            expect(numGetFloor(15.55, 1)).toBe(15.5)
            expect(numGetFloor(1.555e1, 1)).toBe(15.5)
        })
        describe('保留2位小数', () => {
            expect(numGetFloor(15.444, 2)).toBe(15.44)
            expect(numGetFloor(1.5444e1, 2)).toBe(15.44)
            expect(numGetFloor(15.555, 2)).toBe(15.55)
            expect(numGetFloor(1.5555e1, 2)).toBe(15.55)
        })
        describe('保留10位数', () => {
            expect(numGetFloor(155.444, -1)).toBe(150)
            expect(numGetFloor(1.55444e2, -1)).toBe(150)
            expect(numGetFloor(155.555, -1)).toBe(150)
            expect(numGetFloor(1.55555e2, -1)).toBe(150)
        })
        describe('保留百位数', () => {
            expect(numGetFloor(155.444, -2)).toBe(100)
            expect(numGetFloor(1.55444e2, -2)).toBe(100)
            expect(numGetFloor(155.555, -2)).toBe(100)
            expect(numGetFloor(1.55555e2, -2)).toBe(100)
        })
        test('方法传入', () => {
            expect(numGetFloor(155, 12.5)).toBe(NaN)
            expect(numGetFloor(1.55e2, 12.5)).toBe(NaN)
            expect(numGetFloor(155, '??' as unknown as number)).toBe(NaN)
            expect(numGetFloor(1.55e2, '??' as unknown as number)).toBe(NaN)
        })
    })
    describe('向上取整', () => {
        describe('保留0位小数', () => {
            expect(numGetCeil(15.4)).toBe(16)
            expect(numGetCeil(1.54e1)).toBe(16)
            expect(numGetCeil(15.5)).toBe(16)
            expect(numGetCeil(1.55e1)).toBe(16)
        })
        describe('保留1位小数', () => {
            expect(numGetCeil(15.44, 1)).toBe(15.5)
            expect(numGetCeil(1.544e1, 1)).toBe(15.5)
            expect(numGetCeil(15.55, 1)).toBe(15.6)
            expect(numGetCeil(1.555e1, 1)).toBe(15.6)
        })
        describe('保留2位小数', () => {
            expect(numGetCeil(15.444, 2)).toBe(15.45)
            expect(numGetCeil(1.5444e1, 2)).toBe(15.45)
            expect(numGetCeil(15.555, 2)).toBe(15.56)
            expect(numGetCeil(1.5555e1, 2)).toBe(15.56)
        })
        describe('保留10位数', () => {
            expect(numGetCeil(155.444, -1)).toBe(160)
            expect(numGetCeil(1.55444e2, -1)).toBe(160)
            expect(numGetCeil(155.555, -1)).toBe(160)
            expect(numGetCeil(1.55555e2, -1)).toBe(160)
        })
        describe('保留百位数', () => {
            expect(numGetCeil(155.444, -2)).toBe(200)
            expect(numGetCeil(1.55444e2, -2)).toBe(200)
            expect(numGetCeil(155.555, -2)).toBe(200)
            expect(numGetCeil(1.55555e2, -2)).toBe(200)
        })
        test('方法传入', () => {
            expect(numGetCeil(155, 12.5)).toBe(NaN)
            expect(numGetCeil(1.55e2, 12.5)).toBe(NaN)
            expect(numGetCeil(155, '??' as unknown as number)).toBe(NaN)
            expect(numGetCeil(1.55e2, '??' as unknown as number)).toBe(NaN)
        })
    })
})
