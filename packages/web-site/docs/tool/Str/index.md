---
title: Str 字符串工具
---

# Str 字符串工具

## 反转

```js
import { strGetReverse } from 'rubbish-tool'

strGetReverse('Fidel Yiu') // 'uiY lediF'
```

## 首字符

```js
import { strGetFirst } from 'rubbish-tool'

strGetFirst('Fidel Yiu') // 'F'
strGetFirst('') // ''
```

## 删除尾字符

```js
import { strGetDelEnd } from 'rubbish-tool'

strGetDelEnd('Fidel Yiu', ' Yiu') // 'Fidel'
strGetDelEnd('Fidel Yiu', ' Hello') // 'Fidel Yiu'
```