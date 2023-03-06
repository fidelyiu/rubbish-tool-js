import {
    domGetFont,
    domGetTextWidth,
    domIsDescendant,
    domIsPathMath,
    domOpenLink,
} from '../../src'
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

    test('获取dom字体样式', () => {
        const testConfig = {
            /* 这些结果貌似在测试框架中有问题???? */
            'h1@serif': 12,
            'h2@serif': 12,
            'h3@serif': 12,
            'h4@serif': 12,
            'h5@serif': 12,
            'h6@serif': 12,
            'h1@sans-serif': 12,
            'h2@sans-serif': 12,
            'h3@sans-serif': 12,
            'h4@sans-serif': 12,
            'h5@sans-serif': 12,
            'h6@sans-serif': 12,
        }
        const testStr = 'Hello, World'
        const innerHTML = Object.keys(testConfig)
            .map((domConfig) => {
                const [tagName, fontFamily] = domConfig.split('@')
                return `<${tagName} data-testid="${domConfig}" style="font-size: 32px;font-family: ${fontFamily};">${testStr}</${tagName}>`
            })
            .reduce((pre, cur) => `${pre}${cur}`)
        document.body.innerHTML = innerHTML
        Object.entries(testConfig).forEach(([domId, result]) => {
            const testDom = screen.getByTestId(domId)
            const font = domGetFont(testDom)
            expect(domGetTextWidth(testStr, font)).toBe(result)
        })
    })
})
