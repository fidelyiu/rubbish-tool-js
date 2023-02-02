/**
 * 打开链接
 */
export const domOpenLink = (link: string) => {
    const a = document.createElement('a')
    a.href = link
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
}

/**
 * 判断dom是否是后代
 * @param parent 父节点
 * @param child 字节点
 */
export const domIsDescendant = (parent: HTMLElement, child: HTMLElement) => {
    if (!parent) return false
    let node: ParentNode | null = child
    while (node) {
        if (node === parent) return true
        node = node.parentNode
    }
    return false
}

/**
 * 该dom的路径上是否匹配
 *
 * @param dom dom
 * @param matchFunc 匹配函数
 * @param containSelf 是否包含自己
 */
export const domIsPathMath = (
    dom: HTMLElement,
    matchFunc: (e: ParentNode | undefined) => boolean,
    containSelf = true
) => {
    if (!dom || typeof matchFunc !== 'function') return false
    let node = containSelf ? dom : dom.parentNode
    while (node) {
        if (matchFunc(node)) return true
        node = node.parentNode
    }
    return false
}
