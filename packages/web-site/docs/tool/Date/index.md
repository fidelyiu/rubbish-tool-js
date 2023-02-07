---
title: Date 日期工具
---

## 工具使用说明

以下工具方法中仅`dateGetAddByDay`的入参为`any`，其他非法都需要`Date`对象才行。

传入时请判断是否时`Date`对象，你可以使用类似`lodash`库的`isDate`方法。

## 是否是有效Date

```js
import { dateGetAddByDay } from 'rubbish-tool'
dateIsValid(new Date()) // true
```

测试列表：

| 入参                   |  输出   |
| ---------------------- | :-----: |
| `new Date()`           | `true`  |
| `'string'`             | `false` |
| `new Date('无效时间')` | `false` |


## 是否是周末

```js
import { dateIsWeekend } from 'rubbish-tool'
dateIsWeekend(new Date())
```

测试列表：

| 入参                    |  输出   | 说明  |
| ----------------------- | :-----: | :---: |
| `new Date(2023, 2, 6)`  | `false` | 周一  |
| `new Date(2023, 2, 7)`  | `false` | 周二  |
| `new Date(2023, 2, 8)`  | `false` | 周三  |
| `new Date(2023, 2, 9)`  | `false` | 周四  |
| `new Date(2023, 2, 10)` | `false` | 周五  |
| `new Date(2023, 2, 11)` | `false` | 周六  |
| `new Date(2023, 2, 12)` | `false` | 周日  |


## 加减天数

添加天数，如果减就加负数

```js
import { dateGetAddByDay } from 'rubbish-tool'
dateGetAddByDay(new Date('2023-01-30T00:00:00.000Z'), 1)
```

测试列表：

| 入参1                                  | 入参2 |                  输出                  | 说明  |
| -------------------------------------- | :---: | :------------------------------------: | :---: |
| `new Date('2023-01-30T00:00:00.000Z')` |  `1`  | `new Date('2023-01-31T00:00:00.000Z')` | +1天  |
| `new Date('2023-01-30T00:00:00.000Z')` |  `2`  | `new Date('2023-02-01T00:00:00.000Z')` | +2天  |
| `new Date('2023-01-30T00:00:00.000Z')` | `-1`  | `new Date('2023-01-29T00:00:00.000Z')` | -1天  |
| `new Date('2023-01-30T00:00:00.000Z')` | `-2`  | `new Date('2023-01-28T00:00:00.000Z')` | -2天  |
| `new Date('2023-01-30T16:00:00.000Z')` |  `7`  | `new Date('2023-02-06T16:00:00.000Z')` | 跨月  |

## 加减月数

添加月数，如果减就加负数(结果总是月份的第一天)

```js
import { dateGetAddByMonth } from 'rubbish-tool'
dateGetAddByMonth(new Date('2023-01-28T00:00:00.000Z'), 1)
```

测试列表：


| 入参1                                  | 入参2 |                  输出                  |     说明      |
| -------------------------------------- | :---: | :------------------------------------: | :-----------: |
| `new Date('2023-01-28T00:00:00.000Z')` |  `1`  | `new Date('2023-02-01T00:00:00.000Z')` |     +1月      |
| `new Date('2023-01-31T00:00:00.000Z')` |  `2`  | `new Date('2023-03-01T00:00:00.000Z')` |     +2月      |
| `new Date('2023-01-30T00:00:00.000Z')` | `-1`  | `new Date('2022-12-01T00:00:00.000Z')` |     -1月      |
| `new Date('2023-01-30T00:00:00.000Z')` | `-2`  | `new Date('2022-11-01T00:00:00.000Z')` |     -2月      |
| `new Date('2023-01-31T00:00:00.000Z')` |  `1`  | `new Date('2023-02-01T00:00:00.000Z')` | +1月 日期超出 |

## 加减年数

添加年数，如果减就加负数(月份可能会变动)


```js
import { dateGetAddByYear } from 'rubbish-tool'
dateGetAddByYear(new Date('2023-01-28T00:00:00.000Z'), 1)
```

测试列表：

| 入参1                                  | 入参2 |                  输出                  |     说明      |
| -------------------------------------- | :---: | :------------------------------------: | :-----------: |
| `new Date('2023-01-28T00:00:00.000Z')` |  `1`  | `new Date('2024-01-28T00:00:00.000Z')` |     +1年      |
| `new Date('2023-01-31T00:00:00.000Z')` |  `2`  | `new Date('2025-01-31T00:00:00.000Z')` |     +2年      |
| `new Date('2023-01-30T00:00:00.000Z')` | `-1`  | `new Date('2022-01-30T00:00:00.000Z')` |     -1年      |
| `new Date('2023-01-30T00:00:00.000Z')` | `-2`  | `new Date('2021-01-30T00:00:00.000Z')` |     -2年      |
| `new Date('2020-02-29T00:00:00.000Z')` |  `1`  | `new Date('2021-02-29T00:00:00.000Z')` | +1年 日期超出 |

## 是否是上半年

1-6月份为上半年

```js
import { dateIsFstHalfYearMonth } from 'rubbish-tool'
dateIsFstHalfYearMonth(new Date('2023-01-01T00:00:00.000Z'))
```

测试列表：

| 入参                                   |  输出   |   说明   |
| -------------------------------------- | :-----: | :------: |
| `new Date('2023-01-01T00:00:00.000Z')` | `true`  |   一月   |
| `new Date('2023-02-01T00:00:00.000Z')` | `true`  |   二月   |
| `new Date('2023-03-01T00:00:00.000Z')` | `true`  |   三月   |
| `new Date('2023-04-01T00:00:00.000Z')` | `true`  |   四月   |
| `new Date('2023-05-01T00:00:00.000Z')` | `true`  |   五月   |
| `new Date('2023-06-01T00:00:00.000Z')` | `true`  |   六月   |
| `new Date('2023-07-01T00:00:00.000Z')` | `false` |   七月   |
| `new Date('2023-08-01T00:00:00.000Z')` | `false` |   八月   |
| `new Date('2023-09-01T00:00:00.000Z')` | `false` |   九月   |
| `new Date('2023-10-01T00:00:00.000Z')` | `false` |   十月   |
| `new Date('2023-11-01T00:00:00.000Z')` | `false` |  十一月  |
| `new Date('2023-12-01T00:00:00.000Z')` | `false` |  十二月  |
| `new Date('无效时间')`                 | `false` | 无效Date |


## 获取周数

获取时间的周数（年初的部分天数会补齐上年最后一周）


```js
import { dateGetWeekNumber } from 'rubbish-tool'
dateGetWeekNumber(new Date('2023-01-01T00:00:00.000Z'))
```


测试列表：

| 入参                                   | 输出  |        说明        |
| -------------------------------------- | :---: | :----------------: |
| `new Date('2022-12-31T00:00:00.000Z')` | `52`  |      最后一周      |
| `new Date('2023-01-01T00:00:00.000Z')` | `52`  | 年前补齐上一年周数 |
| `new Date('2023-01-02T00:00:00.000Z')` |  `1`  |       第一周       |
| `new Date('2023-01-09T00:00:00.000Z')` |  `2`  |       第二周       |


## 按天向下取整

```js
import { dateGetFloorDateByDay } from 'rubbish-tool'
dateGetFloorDateByDay(new Date('2023-01-01T00:00:00.000Z'))
```


测试列表：

| 入参                                   |                  输出                  |
| -------------------------------------- | :------------------------------------: |
| `new Date('2023-02-02T15:15:15.000Z')` | `new Date('2023-02-02T00:00:00.000Z')` |
| `new Date('2023-02-02T23:59:59.000Z')` | `new Date('2023-02-02T00:00:00.000Z')` |
| `new Date('2023-02-02T00:00:00.000Z')` | `new Date('2023-02-02T00:00:00.000Z')` |


## 按周向下取整

取整到周一

```js
import { dateGetFloorDateByWeek } from 'rubbish-tool'
dateGetFloorDateByWeek(new Date('2023-01-01T00:00:00.000Z'))
```

测试列表：

| 入参                                   |                  输出                  |
| -------------------------------------- | :------------------------------------: |
| `new Date('2023-02-02T15:15:15.000Z')` | `new Date('2023-01-30T00:00:00.000Z')` |

## 格式化

格式化对应形式字符串。

```js
import { dateGetStr1 } from 'rubbish-tool'
dateGetStr1(new Date('2023-01-01T00:00:00.000Z'))
```

格式化表格：

| 方法           |           格式            |
| -------------- | :-----------------------: |
| `dateGetStr1`  |       `YYYY年MM月`        |
| `dateGetStr2`  |         `YYYY年`          |
| `dateGetStr3`  |          `MM月`           |
| `dateGetStr4`  |       `YYYY-第Q季`        |
| `dateGetStr5`  |     `YYYY年MM月DD日`      |
| `dateGetStr6`  | `YYYY年MM月DD日 HH:mm:ss` |
| `dateGetStr7`  |          `YY-MM`          |
| `dateGetStr8`  |          `第Q季`          |
| `dateGetStr9`  |       `YYYY/MM/DD`        |
| `dateGetStr10` |       `YYYY-MM-DD`        |



测试列表：

| 入参                                    |           输出            | 说明                      |
| --------------------------------------- | :-----------------------: | :------------------------ |
| `dateGetStr1(new Date(1675304008334))`  |       `2023年02月`        | `YYYY年MM月`              |
| `dateGetStr2(new Date(1675304008334))`  |         `2023年`          | `YYYY年`                  |
| `dateGetStr3(new Date(1675304008334))`  |          `02月`           | `MM月`                    |
| `dateGetStr4(new Date(1675304008334))`  |      `2023年-第1季`       | `YYYY-第Q季`              |
| `dateGetStr5(new Date(1675304008334))`  |     `2023年02月02日`      | `YYYY年MM月DD日`          |
| `dateGetStr6(new Date(1675304008334))`  | `2023年02月02日 10:13:28` | `YYYY年MM月DD日 HH:mm:ss` |
| `dateGetStr7(new Date(1675304008334))`  |          `23-02`          | `YY-MM`                   |
| `dateGetStr8(new Date(1675304008334))`  |          `第1季`          | `第Q季`                   |
| `dateGetStr9(new Date(1675304008334))`  |       `2023/02/02`        | `YYYY/MM/DD`              |
| `dateGetStr10(new Date(1675304008334))` |       `2023-02-02`        | `YYYY-MM-DD`              |