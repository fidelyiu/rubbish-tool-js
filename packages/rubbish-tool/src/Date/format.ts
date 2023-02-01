/**
 * 格式化时间1
 * @param date 时间
 * @returns 'YYYY年MM月'
 */
export const dateGetStr1 = (date: Date) => {
    const monthStr = `${date.getMonth() + 1}`.padStart(2, '0')
    return `${date.getFullYear()}年${monthStr}月`
}

/**
 * 格式化时间2
 * @param date 时间
 * @returns 'YYYY年'
 */
export const dateGetStr2 = (date: Date) => {
    return `${date.getFullYear()}年`
}

/**
 * 格式化时间3
 * @param date 时间
 * @returns 'MM月'
 */
export const dateGetStr3 = (date: Date) => {
    const monthStr = `${date.getMonth() + 1}`.padStart(2, '0')
    return `${monthStr}月`
}

/**
 * 格式化时间4
 * @param date 时间
 * @returns 'YYYY-第Q季'
 */
export const dateGetStr4 = (date: Date) => {
    const quarterNum = Math.floor(date.getMonth() / 3) + 1
    return `${date.getFullYear()}年-第${quarterNum}季`
}

/**
 * 格式化时间5
 * @param date 时间
 * @returns 'YYYY年MM月DD日'
 */
export const dateGetStr5 = (date: Date) => {
    const monthStr = `${date.getMonth() + 1}`.padStart(2, '0')
    const dayStr = `${date.getDate()}`.padStart(2, '0')
    return `${date.getFullYear()}年${monthStr}月${dayStr}日`
}

/**
 * 格式化时间6
 * @param date 时间
 * @returns 'YYYY年MM月DD日 HH:mm:ss'
 */
export const dateGetStr6 = (date: Date) => {
    const monthStr = `${date.getMonth() + 1}`.padStart(2, '0')
    const dayStr = `${date.getDate()}`.padStart(2, '0')
    const hStr = `${date.getHours()}`.padStart(2, '0')
    const mStr = `${date.getMinutes()}`.padStart(2, '0')
    const sStr = `${date.getSeconds()}`.padStart(2, '0')
    return `${date.getFullYear()}年${monthStr}月${dayStr}日 ${hStr}:${mStr}:${sStr}`
}
/**
 * 格式化时间7
 * @param date 时间
 * @returns 'YY-MM'
 */
export const dateGetStr7 = (date: Date) => {
    const yearStr = `${date.getFullYear()}`.slice(-2)
    const monthStr = `${date.getMonth() + 1}`.padStart(2, '0')
    return `${yearStr}-${monthStr}`
}

/**
 * 格式化时间8
 * @param date 时间
 * @returns '第Q季'
 */
export const dateGetStr8 = (date: Date) => {
    const quarterNum = Math.floor(date.getMonth() / 3) + 1
    return `第${quarterNum}季`
}

/**
 * 格式化时间9
 * @param date 时间
 * @returns 'YYYY/MM/DD'
 */
export const dateGetStr9 = (date: Date) => {
    const monthStr = `${date.getMonth() + 1}`.padStart(2, '0')
    const dayStr = `${date.getDate()}`.padStart(2, '0')
    return `${date.getFullYear()}/${monthStr}/${dayStr}`
}

/**
 * 格式化时间10
 * @param date 时间
 * @returns 'YYYY-MM-DD'
 */
export const dateGetStr10 = (date: Date) => {
    const monthStr = `${date.getMonth() + 1}`.padStart(2, '0')
    const dayStr = `${date.getDate()}`.padStart(2, '0')
    return `${date.getFullYear()}-${monthStr}-${dayStr}`
}
