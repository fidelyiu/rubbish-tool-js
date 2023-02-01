/**
 * 一天的毫秒数
 */
export const timeDay = 86400000

/**
 * 一周的毫秒数
 */
export const timeWeek = 604800000

/**
 * 获取任意数据的时间戳
 * @param data 任意数据
 */
export const timeGetByAny = (data: any) => {
    if (!data) return
    try {
        const date = new Date(data)
        return date.getTime()
    } catch (error) {
        // continue regardless of error
    }
}
