---
title: List 数组工具
---

# List 数组工具

## 通过key检索

方便我们直接指定key获取。

```js
import { listGetItemByKey } from 'rubbish-tool'

const list = [
    { key: 1, name: '1' },
    { key: 2, name: '2' },
    { key: 2, name: '2-1' },
    { key: 3, name: '3' },
    { key: 4, name: '4' },
]

listGetItemByKey(list, 'key', 2) // { key: 2, name: '2' }
```

## 数组乱序

返回一个乱序的新数组。

```js
import { listGetShuffle } from 'rubbish-tool'

const list = [1, 2, 3, 4]
const result = listGetShuffle(list)
```