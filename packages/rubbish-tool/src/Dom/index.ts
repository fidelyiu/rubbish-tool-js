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

/**
 * 获取元素css属性定义
 */
export function domGetCssStyle(el: Element, prop: string): string {
    return getComputedStyle(el, null).getPropertyValue(prop)
}

/**
 * 获取元素字体样式
 */
export function domGetFont(el: Element = document.body): string {
    const fontWeight = domGetCssStyle(el, 'font-weight') || 'normal'
    const fontSize = domGetCssStyle(el, 'font-size') || '16px'
    const fontFamily = domGetCssStyle(el, 'font-family') || 'Times New Roman'
    return `${fontWeight} ${fontSize} ${fontFamily}`
}

export interface DomGetTextWidthFunc {
    (text: string, font?: string): number
    canvas?: HTMLCanvasElement
}

/**
 * 获取文本的宽度
 * @link [stackoverflow](https://stackoverflow.com/questions/118241/calculate-text-width-with-javascript)
 * @param text 文本
 * @param font 字体样式
 */
export const domGetTextWidth: DomGetTextWidthFunc = function (
    text: string,
    font?: string
): number {
    const canvas =
        domGetTextWidth.canvas ||
        (domGetTextWidth.canvas = document.createElement('canvas'))
    const context = canvas.getContext('2d')
    if (!context) return 0
    context.font = font || domGetFont()
    const metrics = context.measureText(text)
    return metrics.width
}
