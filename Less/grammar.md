## 语法


#### 变量
```less
@fontSize: 12px;
@color: #fff;
@border: 1px solid #eee;

h1 {
  font-size: @fontSize;
  color: @color;
  border: @border;
}
```

#### 嵌套
```less
body {
  div {
    ul {
      li {
        color: @color;
      }
    }
  }
}
```

#### 运算符：乘法、加法、减法
```less
@fontSize: 12px;
h1 {
  font-size: @fontSize + 10
}
h2 {
  font-size: @fontSize * 2
}
h3 {
  font-size: @fontSize - 2
}
```

#### mixins
```less
.border {
  border: 1px solid #fff;
  box-shadow: 1px 1px 1px #fff;
}
div {
  .border;
}
```

#### mixins 带参(多个同名的类是被允许的，当然，参数要不一样)
```less
.border (@borderSize: 1px) {
  border: @borderSize solid #fff;
}

.border (@borderSize: 1px, @color) {
  border: @borderSize solid #fff;
  color: @color;
}

div {
  .border(2px);
}
p {
  .border(2px, #fff)
}
```





```less
```
```less
```
```less
```
