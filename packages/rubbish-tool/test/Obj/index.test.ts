import { objIsStrEqual } from '../../src'

describe('对象测试', () => {
    describe('字符串相等', () => {
        test('数字-字符串', () => {
            expect(objIsStrEqual(15.4, '15.4')).toBe(true)
            expect(objIsStrEqual(15, '15')).toBe(true)
            expect(objIsStrEqual(13, '13')).toBe(true)
        })
    })
})
