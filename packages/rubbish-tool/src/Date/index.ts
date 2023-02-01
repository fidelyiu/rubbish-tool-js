import { timeWeek } from '../Time'

/**
 * 是否是有效Date
 * @param data 任意数据
 */
export const dateIsValid = (d: any) => d instanceof Date && !isNaN(d.getTime())

const weekend = new Set([0, 6])
/**
 * 是否是周末
 * @param date 时间
 */
export const dateIsWeekend = (date: Date) => weekend.has(date.getDay())

/**
 * 添加天数，如果减就加负数
 * @param date 时间
 * @param num 添加的数字
 * @returns 新的时间
 */
export const dateGetAddByDay = (date: Date, num: number) => {
    const result = new Date(date.getTime())
    result.setDate(date.getDate() + num)
    return result
}

/**
 * 添加月数，如果减就加负数
 * @param date 时间
 * @param num 添加的数字
 * @returns 新的时间
 */
export const dateGetAddByMonth = (date: Date, num: number) => {
    const result = new Date(date.getTime())
    result.setDate(1)
    result.setMonth(date.getMonth() + num)
    return result
}

/**
 * 添加年数，如果减就加负数
 * @param date 时间
 * @param num 添加的数字
 * @returns 新的时间
 */
export const dateGetAddByYear = (date: Date, num: number) => {
    const result = new Date(date.getTime())
    result.setFullYear(date.getFullYear() + num)
    return result
}

const fstHalfYear = new Set([0, 1, 2, 3, 4, 5])
/**
 * 是否是上半年的月份数
 * @param month
 */
export const dateIsFstHalfYearMonth = (month: number) => {
    return fstHalfYear.has(month)
}

/**
 * 获取时间的周数
 * @param date 时间
 */
export const dateGetWeekNumber = (date: Date) => {
    const dateDay = date.getDay()
    let weekStartData
    if (dateDay === 1) {
        weekStartData = new Date(date)
    } else {
        /* 周日减6天 */
        let dayNum = dateDay - 6
        /* 如果不是周日 */
        if (dayNum !== -6) dayNum = -dateDay
        weekStartData = dateGetAddByDay(date, dayNum)
    }
    weekStartData.setHours(0, 0, 0, 0)

    const startOfYear = new Date(weekStartData.getFullYear(), 0, 1)
    let offsetDay = 2 - startOfYear.getDay()
    if (offsetDay === 2) offsetDay = -5
    startOfYear.setDate(offsetDay)
    return Math.ceil(
        (weekStartData.getTime() - startOfYear.getTime()) / timeWeek
    )
}

/**
 * 按天向下取整Date
 */
export const dateGetFloorDateByDay = (data: Date) => {
    const result = new Date(data.getTime())
    result.setHours(0, 0, 0, 0)
    return result
}

/**
 * 按周向下取整Date（周一）
 */
export const dateGetFloorDateByWeek = (data: Date) => {
    let result = new Date(data.getTime())
    const dateDay = result.getDay()
    if (dateDay !== 1) {
        /* 周日减6天 */
        let dayNum = dateDay - 6
        /* 如果不是周日 */
        if (dayNum !== -6) dayNum = -dateDay
        result = dateGetAddByDay(result, dayNum)
    }
    result.setHours(0, 0, 0, 0)
    return result
}

/**
 * 时间格式方法：
 * dateGetStr1 >> 'YYYY年MM月'
 * dateGetStr2 >> 'YYYY年'
 * dateGetStr3 >> 'MM月'
 * dateGetStr4 >> 'YYYY-第Q季'
 * dateGetStr5 >> 'YYYY年MM月DD日'
 * dateGetStr6 >> 'YYYY年MM月DD日 HH:mm:ss'
 * dateGetStr7 >> 'YY-MM'
 * dateGetStr8 >> '第Q季'
 * dateGetStr9 >> 'YYYY/MM/DD'
 * dateGetStr10 >> 'YYYY-MM-DD'
 */
export {
    dateGetStr1,
    dateGetStr2,
    dateGetStr3,
    dateGetStr4,
    dateGetStr5,
    dateGetStr6,
    dateGetStr7,
    dateGetStr8,
    dateGetStr9,
    dateGetStr10,
} from './format'
