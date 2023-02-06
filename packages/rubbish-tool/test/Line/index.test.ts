import { lineIsInner, lineIsIntersect } from '../../src'

describe('线段测试', () => {
    describe('是否相交', () => {
        describe('相交', () => {
            test('包含-1', () => {
                expect(lineIsIntersect(1, 5, 2, 3)).toBe(true)
            })
            test('包含-2', () => {
                expect(lineIsIntersect(2, 3, 1, 5)).toBe(true)
            })
            test('右相切-1', () => {
                expect(lineIsIntersect(1, 5, 2, 5)).toBe(true)
            })
            test('右相切-2', () => {
                expect(lineIsIntersect(2, 5, 1, 5)).toBe(true)
            })
            test('右超出-3', () => {
                expect(lineIsIntersect(1, 3, 3, 3)).toBe(true)
            })
            test('左相切-1', () => {
                expect(lineIsIntersect(1, 5, 1, 3)).toBe(true)
            })
            test('左相切-2', () => {
                expect(lineIsIntersect(1, 3, 1, 5)).toBe(true)
            })
            test('右超出-1', () => {
                expect(lineIsIntersect(1, 5, 2, 7)).toBe(true)
            })
            test('右超出-2', () => {
                expect(lineIsIntersect(2, 7, 1, 5)).toBe(true)
            })
            test('左超出-1', () => {
                expect(lineIsIntersect(1, 5, -8, 3)).toBe(true)
            })
            test('左超出-2', () => {
                expect(lineIsIntersect(-8, 3, 1, 5)).toBe(true)
            })
            test('相等', () => {
                expect(lineIsIntersect(1, 5, 1, 5)).toBe(true)
            })
        })

        test('不相交', () => {
            expect(lineIsIntersect(1, 5, 7, 9)).toBe(false)
        })
    })

    describe('是否包含', () => {
        test('相交', () => {
            expect(lineIsInner(2, 7, 1, 5)).toBe(false)
        })
        test('包含', () => {
            expect(lineIsInner(2, 3, 1, 5)).toBe(true)
        })
        test('不包含', () => {
            expect(lineIsInner(7, 9, 1, 5)).toBe(false)
        })
    })
})
