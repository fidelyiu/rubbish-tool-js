import { domIsDescendant, domIsPathMath, domOpenLink } from '../../src'
import { screen } from '@testing-library/dom'

describe('dom测试', () => {
    describe('打开链接', () => {
        test('正常打开', () => {
            expect(domOpenLink('www.kuxiaoxin.com')).toBe(undefined)
        })
    })

    describe('后代判断', () => {
        test('非后代判断', () => {
            const dom1Id = 'dom1'
            const dom2Id = 'dom2'
            document.body.innerHTML = `
                <div data-testid="${dom1Id}"></div>
                <div data-testid="${dom2Id}"></div>
            `
            const dom1 = screen.getByTestId(dom1Id)
            const dom2 = screen.getByTestId(dom2Id)
            expect(domIsDescendant(dom1, dom2)).toBe(false)
        })

        test('后代判断', () => {
            const dom1Id = 'dom1'
            const dom2Id = 'dom2'
            document.body.innerHTML = `
                <div data-testid="${dom1Id}">
                    <div data-testid="${dom2Id}"></div>
                </div>
            `
            const dom1 = screen.getByTestId(dom1Id)
            const dom2 = screen.getByTestId(dom2Id)
            expect(domIsDescendant(dom1, dom2)).toBe(true)
        })

        test('后代顺序错误', () => {
            const dom1Id = 'dom1'
            const dom2Id = 'dom2'
            document.body.innerHTML = `
                <div data-testid="${dom1Id}">
                    <div data-testid="${dom2Id}"></div>
                </div>
            `
            const dom1 = screen.getByTestId(dom1Id)
            const dom2 = screen.getByTestId(dom2Id)
            expect(domIsDescendant(dom2, dom1)).toBe(false)
        })

        test('后代为自己', () => {
            const dom1Id = 'dom1'
            document.body.innerHTML = `
                <div data-testid="${dom1Id}"></div>
            `
            const dom1 = screen.getByTestId(dom1Id)
            expect(domIsDescendant(dom1, dom1)).toBe(true)
        })

        test('非法传入', () => {
            const dom1Id = 'dom1'
            const dom2Id = 'dom2'
            document.body.innerHTML = ``
            const dom1 = screen.queryByTestId(dom1Id)
            const dom2 = screen.queryByTestId(dom2Id)
            expect(
                domIsDescendant(dom1 as HTMLElement, dom2 as HTMLElement)
            ).toBe(false)
        })
    })

    describe('路径是否匹配', () => {
        test('匹配', () => {
            const domId = 'testDom'
            document.body.innerHTML = `
                <div class="class1">
                    <div class="class2">
                        <div class="class3" data-testid="${domId}"></div>
                    </div>
                </div>
            `
            const testDom = screen.getByTestId(domId)
            expect(
                domIsPathMath(testDom, (parentNode) => {
                    if (!parentNode) return false
                    const { className } = <HTMLElement>parentNode
                    if (!className) return false
                    return className.includes('class1')
                })
            ).toBe(true)
        })

        test('不匹配', () => {
            const domId = 'testDom'
            document.body.innerHTML = `
                <div>
                    <div class="class2">
                        <div class="class3" data-testid="${domId}"></div>
                    </div>
                </div>
            `
            const testDom = screen.getByTestId(domId)
            expect(
                domIsPathMath(testDom, (parentNode) => {
                    if (!parentNode) return false
                    const { className } = <HTMLElement>parentNode
                    if (!className) return false
                    return className.includes('class1')
                })
            ).toBe(false)
        })

        test('匹配自己', () => {
            const domId = 'testDom'
            document.body.innerHTML = `
                <div class="class1" data-testid="${domId}"></div>
            `
            const testDom = screen.getByTestId(domId)
            expect(
                domIsPathMath(testDom, (parentNode) => {
                    if (!parentNode) return false
                    const { className } = <HTMLElement>parentNode
                    if (!className) return false
                    return className.includes('class1')
                })
            ).toBe(true)
        })

        test('不匹配自己', () => {
            const domId = 'testDom'
            document.body.innerHTML = `
                <div class="class1" data-testid="${domId}"></div>
            `
            const testDom = screen.getByTestId(domId)
            expect(
                domIsPathMath(
                    testDom,
                    (parentNode) => {
                        if (!parentNode) return false
                        const { className } = <HTMLElement>parentNode
                        if (!className) return false
                        return className.includes('class1')
                    },
                    false
                )
            ).toBe(false)
        })

        test('非法传入', () => {
            const domId = 'testDom'
            document.body.innerHTML = ``
            const testDom = screen.queryByTestId(domId)
            expect(domIsPathMath(testDom as HTMLElement, () => true)).toBe(
                false
            )
        })
    })
})
