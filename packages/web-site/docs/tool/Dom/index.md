---
title: Dom dom工具
---

# Dom dom工具

## 打开链接

```js
import { domOpenLink } from 'rubbish-tool'

domOpenLink('www.kuxiaoxin.com')
```

## 后代判断

```js
import { domIsDescendant } from 'rubbish-tool'

const dom1 = document.getElementById("dom1")
const dom2 = document.getElementById("dom2")
domIsDescendant(dom1, dom2)
```

> 自己和自己判断也返回true

## 路径是否匹配

`dom`的路径上（检查`parent`直到`body`）是否匹配

```js
import { domIsPathMath } from 'rubbish-tool'

domIsPathMath(testDom, (parentNode) => {
    if (!parentNode) return false
    const { className } = parentNode
    if (!className) return false
    return className.includes('class1')
})

domIsPathMath(
    testDom,
    (parentNode) => {
        if (!parentNode) return false
        const { className } = parentNode
        if (!className) return false
        return className.includes('class1')
    },
    // 自己不进行匹配判断
    false
)
```

## 获取元素css属性定义

```js
import { domGetCssStyle } from 'rubbish-tool'

const fontSize = domGetCssStyle(testDom, 'font-size')
```


## 获取元素字体样式

```js
import { domGetFont } from 'rubbish-tool'

const fontStyle = domGetFont(testDom)
```

## 获取文本的宽度

```js
import { domGetTextWidth, domGetFont } from 'rubbish-tool'

const fontWidth = domGetTextWidth("Holle Yiu", domGetFont(testDom))
```