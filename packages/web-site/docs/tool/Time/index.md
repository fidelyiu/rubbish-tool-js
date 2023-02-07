---
title: Time 时间戳工具
---

# Time 时间戳工具

## 时长常量
```js
import { timeDay, timeWeek } from '../../src'

timeDay // 24 * 60 * 60 * 1000 = 86400000
timeWeek // 7 * 24 * 60 * 60 * 1000 = 604800000
```

## 任意数据时间戳

```js
import { timeGetByAny } from 'rubbish-tool'

timeGetByAny(new Date())
```

测试列表：

### 非法输入

| 入参                      |    输出     |
| ------------------------- | :---------: |
| `timeGetByAny('')`        | `undefined` |
| `timeGetByAny(false)`     | `undefined` |
| `timeGetByAny(undefined)` | `undefined` |
| `timeGetByAny(null)`      | `undefined` |
| `timeGetByAny(NaN)`       | `undefined` |
| `timeGetByAny(() => '')`  | `undefined` |


### 正常输入

| 入参                                    |      输出       |
| --------------------------------------- | :-------------: |
| `timeGetByAny(15)`                      |      `15`       |
| `timeGetByAny(1675304008334)`           | `1675304008334` |
| `timeGetByAny(new Date(1675304008334))` | `1675304008334` |
