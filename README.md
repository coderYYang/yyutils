# yy 的 js 工具库

安装

```js
npm i yyutils
```

你可以引入整个 yyutils.js，或是根据需要仅引入部分方法。

- 完整引入

  ```js
  // 完整引入
  import * as yyutils from 'yyutils'
  // 使用补零方法为例
  const zero = 10
  /**
   *	repairZero 支持三个参数
   *	第一个参数是需要补零的值
   *	第二个参数是需要补零的个数
   *	第三个参数是补在前面还是后面
   */
  const newZero = yyutils.repairZero(zero, 2, false)
  console.log(newZero) // 0010
  ```

- 按需引入

  ```js
  // 按需引入
  import { repairZero } from 'yyutils'
  // 使用补零方法为例
  const zero = 10
  /**
   *	repairZero 支持三个参数
   *	第一个参数是需要补零的值
   *	第二个参数是需要补零的个数
   *	第三个参数是补在前面还是后面
   */
  const newZero = repairZero(zero, 2, false)
  console.log(newZero) // 0010
  ```
