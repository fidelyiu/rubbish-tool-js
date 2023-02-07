## 安装

```bash
npm i rubbish-tool
yarn add rubbish-tool
pnpm add rubbish-tool
```

## 使用
### ems & ts
```js
import { timeDay } from "rubbish-tool"
console.log(`一天的毫秒数为：${timeDay}`)
```


### commonjs
```js
const { timeDay } = require("rubbish-tool");
console.log(`一天的毫秒数为：${timeDay}`)
```


### CDN
```html
<script src="https://cdn.jsdelivr.net/npm/rubbish-tool"></script>
<script>
    const { timeDay } = RTool;
    console.log(`一天的毫秒数为：${timeDay}`)
</script>

<!-- 你也可以使用没有map文件链接 -->
<!-- <script src="https://cdn.jsdelivr.net/npm/rubbish-tool/dist/umd/rubbish-tool.min.nomap.js"></script> -->
```