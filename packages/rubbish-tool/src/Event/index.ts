/**
 * 将事件阻止冒泡和默认事件
 */
export function eventFalse(e: any): void {
    if (!e) return
    const { stopPropagation, preventDefault } = e
    if (typeof stopPropagation === 'function') {
        stopPropagation()
    }
    if (typeof preventDefault === 'function') {
        preventDefault()
    }
}
