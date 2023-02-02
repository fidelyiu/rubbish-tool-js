import {
    dateGetAddByDay,
    dateGetAddByMonth,
    dateGetAddByYear,
    dateGetStr1,
    dateGetStr10,
    dateGetStr2,
    dateGetStr3,
    dateGetStr4,
    dateGetStr5,
    dateGetStr6,
    dateGetStr7,
    dateGetStr8,
    dateGetStr9,
    dateGetWeekNumber,
    dateIsFstHalfYearMonth,
    dateIsValid,
    dateIsWeekend,
    timeDay,
} from '../../src'

describe('时间测试', () => {
    describe('入参是否有效Date', () => {
        test('非Date', () => {
            expect(dateIsValid('string' as unknown as Date)).toBe(false)
        })
        test('Date', () => {
            expect(dateIsValid(new Date())).toBe(true)
        })
        test('无效Date', () => {
            expect(dateIsValid(new Date('无效时间'))).toBe(false)
        })
    })

    describe('Date是否是周末', () => {
        test('非周末-周1', () => {
            expect(dateIsWeekend(new Date(2023, 2, 6))).toBe(false)
        })
        test('非周末-周2', () => {
            expect(dateIsWeekend(new Date(2023, 2, 7))).toBe(false)
        })
        test('非周末-周3', () => {
            expect(dateIsWeekend(new Date(2023, 2, 8))).toBe(false)
        })
        test('非周末-周4', () => {
            expect(dateIsWeekend(new Date(2023, 2, 9))).toBe(false)
        })
        test('非周末-周5', () => {
            expect(dateIsWeekend(new Date(2023, 2, 10))).toBe(false)
        })
        test('非周末-周6', () => {
            expect(dateIsWeekend(new Date(2023, 2, 11))).toBe(true)
        })
        test('非周末-周日', () => {
            expect(dateIsWeekend(new Date(2023, 2, 12))).toBe(true)
        })
    })

    describe('Date加减天数', () => {
        test('+1天', () => {
            expect(
                dateGetAddByDay(new Date('2023-01-30T00:00:00.000Z'), 1)
            ).toStrictEqual(new Date('2023-01-31T00:00:00.000Z'))
        })
        test('+2天', () => {
            expect(
                dateGetAddByDay(new Date('2023-01-30T00:00:00.000Z'), 2)
            ).toStrictEqual(new Date('2023-02-01T00:00:00.000Z'))
        })
        test('-1天', () => {
            expect(
                dateGetAddByDay(new Date('2023-01-30T00:00:00.000Z'), -1)
            ).toStrictEqual(new Date('2023-01-29T00:00:00.000Z'))
        })
        test('-2天', () => {
            expect(
                dateGetAddByDay(new Date('2023-01-30T00:00:00.000Z'), -2)
            ).toStrictEqual(new Date('2023-01-28T00:00:00.000Z'))
        })
        test('+1天 时间戳对比', () => {
            expect(dateGetAddByDay(new Date(1675304008334), 1).getTime()).toBe(
                new Date(1675304008334 + timeDay).getTime()
            )
        })

        test('跨月', () => {
            expect(
                dateGetAddByDay(new Date('2023-01-30T16:00:00.000Z'), 7)
            ).toStrictEqual(new Date('2023-02-06T16:00:00.000Z'))
        })
    })

    describe('Date加减月数', () => {
        test('+1月', () => {
            expect(
                dateGetAddByMonth(new Date('2023-01-28T00:00:00.000Z'), 1)
            ).toStrictEqual(new Date('2023-02-01T00:00:00.000Z'))
        })
        test('+2月', () => {
            expect(
                dateGetAddByMonth(new Date('2023-01-31T00:00:00.000Z'), 2)
            ).toStrictEqual(new Date('2023-03-01T00:00:00.000Z'))
        })
        test('-1月', () => {
            expect(
                dateGetAddByMonth(new Date('2023-01-30T00:00:00.000Z'), -1)
            ).toStrictEqual(new Date('2022-12-01T00:00:00.000Z'))
        })
        test('-2月', () => {
            expect(
                dateGetAddByMonth(new Date('2023-01-30T00:00:00.000Z'), -2)
            ).toStrictEqual(new Date('2022-11-01T00:00:00.000Z'))
        })
        test('+1月 日期超出', () => {
            expect(
                dateGetAddByMonth(new Date('2023-01-31T00:00:00.000Z'), 1)
            ).toStrictEqual(new Date('2023-02-01T00:00:00.000Z'))
        })
    })

    describe('Date加减年数', () => {
        test('+1年', () => {
            expect(
                dateGetAddByYear(new Date('2023-01-28T00:00:00.000Z'), 1)
            ).toStrictEqual(new Date('2024-01-28T00:00:00.000Z'))
        })
        test('+2年', () => {
            expect(
                dateGetAddByYear(new Date('2023-01-31T00:00:00.000Z'), 2)
            ).toStrictEqual(new Date('2025-01-31T00:00:00.000Z'))
        })
        test('-1年', () => {
            expect(
                dateGetAddByYear(new Date('2023-01-30T00:00:00.000Z'), -1)
            ).toStrictEqual(new Date('2022-01-30T00:00:00.000Z'))
        })
        test('-2年', () => {
            expect(
                dateGetAddByYear(new Date('2023-01-30T00:00:00.000Z'), -2)
            ).toStrictEqual(new Date('2021-01-30T00:00:00.000Z'))
        })
        test('+1年 日期超出', () => {
            expect(
                dateGetAddByYear(new Date('2020-02-29T00:00:00.000Z'), 1)
            ).toStrictEqual(new Date('2021-02-29T00:00:00.000Z'))
        })
    })

    describe('Date上下半年判断', () => {
        test('1月', () => {
            expect(
                dateIsFstHalfYearMonth(new Date('2023-01-01T00:00:00.000Z'))
            ).toBe(true)
        })
        test('2月', () => {
            expect(
                dateIsFstHalfYearMonth(new Date('2023-02-01T00:00:00.000Z'))
            ).toBe(true)
        })
        test('3月', () => {
            expect(
                dateIsFstHalfYearMonth(new Date('2023-03-01T00:00:00.000Z'))
            ).toBe(true)
        })
        test('4月', () => {
            expect(
                dateIsFstHalfYearMonth(new Date('2023-04-01T00:00:00.000Z'))
            ).toBe(true)
        })
        test('5月', () => {
            expect(
                dateIsFstHalfYearMonth(new Date('2023-05-01T00:00:00.000Z'))
            ).toBe(true)
        })
        test('6月', () => {
            expect(
                dateIsFstHalfYearMonth(new Date('2023-06-01T00:00:00.000Z'))
            ).toBe(true)
        })
        test('7月', () => {
            expect(
                dateIsFstHalfYearMonth(new Date('2023-07-01T00:00:00.000Z'))
            ).toBe(false)
        })
        test('8月', () => {
            expect(
                dateIsFstHalfYearMonth(new Date('2023-08-01T00:00:00.000Z'))
            ).toBe(false)
        })
        test('9月', () => {
            expect(
                dateIsFstHalfYearMonth(new Date('2023-09-01T00:00:00.000Z'))
            ).toBe(false)
        })
        test('10月', () => {
            expect(
                dateIsFstHalfYearMonth(new Date('2023-10-01T00:00:00.000Z'))
            ).toBe(false)
        })
        test('11月', () => {
            expect(
                dateIsFstHalfYearMonth(new Date('2023-11-01T00:00:00.000Z'))
            ).toBe(false)
        })
        test('12月', () => {
            expect(
                dateIsFstHalfYearMonth(new Date('2023-12-01T00:00:00.000Z'))
            ).toBe(false)
        })
        test('无效Date', () => {
            expect(dateIsFstHalfYearMonth(new Date('无效时间'))).toBe(false)
        })
    })

    describe('获取周数', () => {
        test('第一周', () => {
            expect(
                dateGetWeekNumber(new Date('2023-01-01T00:00:00.000Z'))
            ).toBe(1)
        })
        test('第二周', () => {
            expect(
                dateGetWeekNumber(new Date('2023-01-02T00:00:00.000Z'))
            ).toBe(2)
        })
        test('最后一周', () => {
            expect(
                dateGetWeekNumber(new Date('2022-12-31T00:00:00.000Z'))
            ).toBe(1)
        })
    })

    describe('格式化', () => {
        test('YYYY年MM月', () => {
            expect(dateGetStr1(new Date(1675304008334))).toBe('2023年02月')
        })

        test('YYYY年', () => {
            expect(dateGetStr2(new Date(1675304008334))).toBe('2023年')
        })

        test('MM月', () => {
            expect(dateGetStr3(new Date(1675304008334))).toBe('02月')
        })

        test('YYYY-第Q季', () => {
            expect(dateGetStr4(new Date(1675304008334))).toBe('2023年-第1季')
        })

        test('YYYY年MM月DD日', () => {
            expect(dateGetStr5(new Date(1675304008334))).toBe('2023年02月02日')
        })

        test('YYYY年MM月DD日 HH:mm:ss', () => {
            expect(dateGetStr6(new Date(1675304008334))).toBe(
                '2023年02月02日 10:13:28'
            )
        })

        test('YY-MM', () => {
            expect(dateGetStr7(new Date(1675304008334))).toBe('23-02')
        })

        test('第Q季', () => {
            expect(dateGetStr8(new Date(1675304008334))).toBe('第1季')
        })

        test('YYYY/MM/DD', () => {
            expect(dateGetStr9(new Date(1675304008334))).toBe('2023/02/02')
        })

        test('YYYY-MM-DD', () => {
            expect(dateGetStr10(new Date(1675304008334))).toBe('2023-02-02')
        })
    })
})
