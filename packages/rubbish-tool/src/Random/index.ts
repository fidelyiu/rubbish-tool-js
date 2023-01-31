/**
 * 获取一个随机字符串ID
 *
 * [stackoverflow解决方案](https://stackoverflow.com/questions/105034/how-do-i-create-a-guid-uuid)
 */
export const getRandomId = () => {
    return (<any>[1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(
        /[018]/g,
        (c: number) =>
            (
                c ^
                (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
            ).toString(16)
    ) as string
}

/**
 * 获取{min-max}之间的随机整数
 *
 * [stackoverflow解决方案](https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript)
 *
 * @param min 最小值
 * @param max 最大值
 */
export const getRandomInt = (min = 0, max = 100) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
}
