/**
 * 判断两个线段是否相交
 *
 * `l1-l2`与`l3-l4`进行比较
 *
 * @param l1 第一个线段的开始点
 * @param l2 第一个线段的结束点
 * @param l3 第二个线段的开始点
 * @param l4 第二个线段的结束点
 */
export const lineIsIntersect = (
    l1: number,
    l2: number,
    l3: number,
    l4: number
) => {
    return (
        // l3是否在第一个线段中
        (l1 <= l3 && l3 <= l2) ||
        // l4是否在第一个线段中
        (l1 <= l4 && l4 <= l2) ||
        // l1是否在第二个线段中
        (l3 <= l1 && l1 <= l4)
        // l2是否在第二个线段中，（貌似通过单元测试结果来看，满足以上三条之一，就可以判断是否相交了）
        // (l3 <= l2 && l2 <= l4)
    )
}

/**
 * 判断线段1是否包在再线段2中
 *
 * 线段1：`l1-l2`
 * 线段2：`l3-l4`
 *
 * @param l1 第一个线段的开始点
 * @param l2 第一个线段的结束点
 * @param l3 第二个线段的开始点
 * @param l4 第二个线段的结束点
 */
export const lineIsInner = (l1: number, l2: number, l3: number, l4: number) => {
    return (
        // l1是否在第二个线段中
        l3 <= l1 &&
        l1 <= l4 &&
        // l2是否在第二个线段中
        l3 <= l2 &&
        l2 <= l4
    )
}
