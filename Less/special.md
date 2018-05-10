## 特殊技巧 

#### mixins @arguments变量参数/@rest 变量
```less
.shadow (@x: 0, @y: 0, @blur: 1px, @color: #000) {
  box-shadow: @arguments; // @arguments 表示所有参数
}
.shadow (...) {
  box-shadow: @arguments; // ... 表示，参数变量是无限的
}
.shadow (@x, @y, @rest...) {
  box-shadow: @x, @y, @rest; // @rest 表示其他参数
}
div {
  .shadow !important;         // !important 表示，mixin 的类所有的匹配都设成 important
}
```

#### mixin 模式匹配与 Guard 表达式(类同名函数)
```less
.border (left, @borderSize: 1px) {
  text-align:left;
}
.border (right, @borderSize: 1px) {
  text-align:right;
}
.border (@_, @borderSize: 1px) {
  border: @borderSize solid #fff;
}

div {
  .border(left, 2px);
}
```



