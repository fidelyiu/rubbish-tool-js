import { timeDay, timeGetByAny, timeWeek } from '../../src'

describe('时间戳测试', () => {
    describe('时间戳常量', () => {
        test('天毫秒数', () => {
            expect(timeDay).toBe(24 * 60 * 60 * 1000)
        })
        test('周毫秒数', () => {
            expect(timeWeek).toBe(7 * 24 * 60 * 60 * 1000)
        })
    })
    describe('任意变量获取时间戳', () => {
        test('非法输入', () => {
            expect(timeGetByAny('')).toBe(undefined)
            expect(timeGetByAny(false)).toBe(undefined)
            expect(timeGetByAny(undefined)).toBe(undefined)
            expect(timeGetByAny(null)).toBe(undefined)
            expect(timeGetByAny(NaN)).toBe(undefined)
            expect(timeGetByAny(() => '')).toBe(undefined)
        })
        test('Date构造输入', () => {
            expect(timeGetByAny(new Date('2023-12-01T00:00:00.000Z'))).toBe(
                new Date('2023-12-01T00:00:00.000Z').getTime()
            )
            expect(timeGetByAny(15)).toBe(15)
        })
    })
})
