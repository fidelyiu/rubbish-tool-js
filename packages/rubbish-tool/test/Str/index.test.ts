import { strGetDelEnd, strGetFirst, strGetReverse } from '../../src/Str'

test('字符串测试 翻转 有效值传入', () => {
    expect(strGetReverse('Fidel Yiu')).toBe('uiY lediF')
})

test('字符串测试 首字符串 有效值传入', () => {
    expect(strGetFirst('Fidel Yiu')).toBe('F')
})

test('字符串测试 首字符串 无效值传入', () => {
    expect(strGetFirst('')).toBe('')
})

test('字符串测试 删除结尾 存在结尾', () => {
    expect(strGetDelEnd('Fidel Yiu', ' Yiu')).toBe('Fidel')
})

test('字符串测试 删除结尾 不存在结尾', () => {
    expect(strGetDelEnd('Fidel Yiu', ' Hello')).toBe('Fidel Yiu')
})
