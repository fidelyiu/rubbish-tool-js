/**
 * 获取任意数据的时间戳
 * @param data 任意数据
 */
export const getAnyTime = (data: any) => {
    if (!data) return
    try {
        const date = new Date(data)
        return date.getTime()
    } catch (error) {
        // continue regardless of error
    }
}

/**
 * 是否是有效Date
 * @param data 任意数据
 */
export const isValidDate = (d: any) => d instanceof Date && !isNaN(d.getTime())

const weekend = new Set([0, 6])
/**
 * 是否是周末
 * @param date 时间
 */
export const isWeekend = (date: Date) => weekend.has(date.getDay())
