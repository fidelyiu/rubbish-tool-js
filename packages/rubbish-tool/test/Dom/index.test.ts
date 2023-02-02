import { domIsDescendant, domOpenLink } from '../../src'
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
    })
})
