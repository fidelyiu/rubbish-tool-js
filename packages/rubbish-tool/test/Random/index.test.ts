import { randomGetId, randomGetInt } from '../../src'

describe('随机因子测试', () => {
    describe('随机Id', () => {
        test('1000次 两次生产不会一样', () => {
            const resultSet = new Set()
            const loopLen = 1000
            for (let i = 0; i < loopLen; i++) {
                resultSet.add(randomGetId())
            }
            expect(resultSet.size).toBe(loopLen)
        })

        test('1000次 生成的都是字符串', () => {
            const resultSet = new Set()
            const loopLen = 1000
            for (let i = 0; i < loopLen; i++) {
                const item = randomGetId()
                if (typeof item !== 'string') continue
                resultSet.add(randomGetId())
            }
            expect(resultSet.size).toBe(loopLen)
        })
    })

    describe('随机数字', () => {
        test.skip('幸运抉择 一局定乾坤', () => {
            const fate = ['to be', 'not to be']
            const index = randomGetInt() % 2
            console.log('My choice :>> ', fate[index])
        })
        test.skip('幸运抉择 3盘两胜', () => {
            const fate = ['to be', 'not to be']
            const fateObj: { [key: string]: number } = Array.from({ length: 3 })
                .map(() => fate[randomGetInt() % 2])
                .reduce((pre, cur) => {
                    return { ...pre, [cur]: pre[cur] ? pre[cur] + 1 : 1 }
                }, {} as any)
            console.log(
                'My choice :>> ',
                Object.entries(fateObj).reduce((pre, cur) =>
                    cur[1] > pre[1] ? pre : cur
                )[0]
            )
        })

        test('1000次 都在范围内', () => {
            const resultArr: number[] = []
            const min = 0
            const max = 100
            for (let i = 0; i < 1000; i++) {
                resultArr.push(randomGetInt(min, max))
            }
            expect(resultArr.every((num) => 0 <= num && num <= 100)).toBe(true)
        })
    })
})
