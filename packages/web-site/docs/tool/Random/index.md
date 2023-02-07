---
title: Random 随机工具
---

# Random 随机工具


## 随机ID

你也可以认为是`UUID`

```js
import { randomGetId } from 'rubbish-tool'

randomGetId()
```

## 随机数字

获取`{min-max}`之间的随机整数，`min`默认`0`，`max`默认`100`。

```js
import { randomGetInt } from 'rubbish-tool'

const min = 10
const max = 1000
randomGetInt(min, max)
randomGetInt()
```