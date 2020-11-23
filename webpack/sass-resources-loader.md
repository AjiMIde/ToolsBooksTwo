## sass-resources-loader

* keys：`sass`, `scss`, `全局变量`, `webpack`
* 使用`sass-resources-loader`能够在`webpack`中使用全局的`SASS/SCSS`变量，避免在多个文件中重复引用（方便）


```bash
# npm i sass-resources-loader -D
```

```js
// in vue.config.js
// 参考：https://cli.vuejs.org/zh/guide/css.html#%E5%90%91%E9%A2%84%E5%A4%84%E7%90%86%E5%99%A8-loader-%E4%BC%A0%E9%80%92%E9%80%89%E9%A1%B9

module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "~@/styles/_variable.scss"` // 路径相对于：src/styles/...
      }
    }
  }
}

```

