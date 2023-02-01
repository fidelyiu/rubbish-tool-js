/**
 * 获取字符串反转
 */
export function strGetReverse(str: string): string {
    return str.split('').reverse().join('')
}

/**
 * 获取第一个字符
 */
export function strGetFirst(str: string): string {
    return str[0] || ''
}

/**
 * 获取删除结尾字符串的新字符串
 * @param s 原字符串
 * @param e 删除的结尾字符串
 * @returns 新的字符串，如果没有以 `e` 结尾则不删除
 */
export function strGetDelEnd(s: string, e: string): string {
    if (!s.endsWith(e)) {
        return s
    } else {
        return s.slice(0, -e.length)
    }
}
