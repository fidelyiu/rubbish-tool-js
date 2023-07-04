/**
 * 从数组中检索item
 * @param list 数据
 * @param key 检索key
 * @param value 检索值
 * @returns 检索到的item，也可能是undefined
 */
export function listGetItemByKey(list: any[], key: string, value: any) {
    if (!Array.isArray(list)) return
    const loopLen = list.length
    for (let i = 0; i < loopLen; i++) {
        const item = list[i]
        if (!item || item[key] !== value) continue
        return item
    }
}

/**
 * 获取乱序的数组
 */
export function listGetShuffle(list: any[]) {
    const result = [...list]
    let currentIndex = result.length
    let randomIndex
    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex)
        currentIndex--
        ;[result[currentIndex], result[randomIndex]] = [
            result[randomIndex],
            result[currentIndex],
        ]
    }
    return result
}
