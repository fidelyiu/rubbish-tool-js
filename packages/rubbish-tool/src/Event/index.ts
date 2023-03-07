/**
 * 阻止事件冒泡
 */
export function eventFalseProp(e: any): void {
    if (!e) return
    const { stopPropagation } = e
    if (typeof stopPropagation === 'function') {
        stopPropagation()
    }
}

/**
 * 阻止默认事件
 */
export function eventFalseDef(e: any): void {
    if (!e) return
    const { preventDefault } = e
    if (typeof preventDefault === 'function') {
        preventDefault()
    }
}

/**
 * 将事件阻止冒泡和默认事件
 */
export function eventFalse(e: any): void {
    eventFalseProp(e)
    eventFalseDef(e)
}
