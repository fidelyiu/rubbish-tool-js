import { strGetDelEnd, strGetFirst, strGetReverse } from '../../src'

describe('字符串测试', () => {
    describe('翻转', () => {
        test('有效值传入', () => {
            expect(strGetReverse('Fidel Yiu')).toBe('uiY lediF')
        })
    })

    describe('获取首字符串', () => {
        test('有效值传入', () => {
            expect(strGetFirst('Fidel Yiu')).toBe('F')
        })

        test('无效值传入', () => {
            expect(strGetFirst('')).toBe('')
        })
    })

    describe('删除结尾字符串', () => {
        test('存在结尾', () => {
            expect(strGetDelEnd('Fidel Yiu', ' Yiu')).toBe('Fidel')
        })

        test('不存在结尾', () => {
            expect(strGetDelEnd('Fidel Yiu', ' Hello')).toBe('Fidel Yiu')
        })
    })
})
