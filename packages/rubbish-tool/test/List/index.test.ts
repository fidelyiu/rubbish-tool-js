import { listGetItemByKey } from '../../src'

describe('数组测试', () => {
    describe('从数组中根据key检索item', () => {
        test('存在', () => {
            const list = [
                { key: 1, name: '1' },
                { key: 2, name: '2' },
                { key: 2, name: '2-1' },
                { key: 3, name: '3' },
                { key: 4, name: '4' },
            ]
            const result = listGetItemByKey(list, 'key', 2)
            expect(result).toBeTruthy()
            expect(result.name).toBe('2')
        })
        test('不存在', () => {
            const list = [
                { key: 1, name: '1' },
                { key: 2, name: '2' },
                { key: 2, name: '2-1' },
                { key: 3, name: '3' },
                { key: 4, name: '4' },
            ]
            const result = listGetItemByKey(list, 'key', 5)
            expect(result).toBeFalsy()
        })
        test('非数组传入', () => {
            const list = '[] not arr ??'
            const result = listGetItemByKey(
                list as unknown as Array<any>,
                'key',
                5
            )
            expect(result).toBeFalsy()
        })
    })
})
