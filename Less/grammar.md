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

#### mixin
```less
.border {
  border: 1px solid #fff;
  box-shadow: 1px 1px 1px #fff;
}
div {
  .border;
}
```

#### mixin 带参(多个同名的类是被允许的，当然，参数要不一样)
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

#### 嵌套媒体查询
```less
.bar {
  @media (min-width: 400px) and (max-width: 800px) {
    color: #fff;
    @media print {
      font-size: 18px;
    }
  }
}
// ==> 
@media (min-width: 400px) and (max-width: 800px) {
  .bar {
    color: #fff;
  }
}
@media (min-width: 400px) and (max-width: 800px) and print {
  .bar {
      font-size: 18px;
  }
}
    
```

#### 命名空间
```less
#space {
  .color {
    color: #fff;
  }
  
}

div {
  #space > .color;
}
```

#### 字符串插值
```less
// 还记得 ES6 是怎么快速处理字符串与变量之前的关系的？
// let str = 'foo'; let bar = `${str}`
@src: 'asset/src/';
div {
  background-image: url("@{src}/bg.png");
}
```

#### JavaScript求值(慎用)
```less
@str: "hello";
@var: ~`"@{str}".toUpperCase() + '!'`;
@var: "HELLO!";
```
