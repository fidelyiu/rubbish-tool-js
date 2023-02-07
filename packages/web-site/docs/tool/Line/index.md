---
title: Line 线段工具
---

# Line 线段工具

## 是否相交

`l1-l2`与`l3-l4`进行比较。

```js
import { lineIsIntersect } from 'rubbish-tool'

/* 线段1 */
const l1 = 1 /* 线段1的开始点 */
const l2 = 5 /* 线段1的结束点 */
/* 线段2 */
const l3 = 2 /* 线段2的开始点 */
const l4 = 3 /* 线段2的结束点 */

lineIsIntersect((l1, l2, l3, l4))
```

## 是否包含

判断线段1是否包在线段2中。

```js
import { lineIsInner } from 'rubbish-tool'

/* 线段1 */
const l1 = 2 /* 线段1的开始点 */
const l2 = 3 /* 线段1的结束点 */
/* 线段2 */
const l3 = 1 /* 线段2的开始点 */
const l4 = 5 /* 线段2的结束点 */

lineIsInner((l1, l2, l3, l4))
```