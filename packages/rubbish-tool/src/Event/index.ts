/**
 * 阻止事件冒泡
 */
export function eventFalseProp(e: any): void {
    if (!e) return
    if (typeof e.stopPropagation === 'function') {
        e.stopPropagation()
    }
}

/**
 * 阻止默认事件
 */
export function eventFalseDef(e: any): void {
    if (!e) return
    if (typeof e.preventDefault === 'function') {
        e.preventDefault()
    }
}

/**
 * 将事件阻止冒泡和默认事件
 */
export function eventFalse(e: any): void {
    eventFalseProp(e)
    eventFalseDef(e)
}
