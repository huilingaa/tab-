# tab-
立即执行函数
```js
(function test (a, b, c, d) {
  // 1. 可以创建一个与外界没有任何关联的作用域，独立作用域
  // 2. 执行完成以后，自动销毁
  // 3. ES3 ES5 立场上是没有模块概念，立即执行函数来模拟模块化
        // 封闭作用域、抛出接口
  // 向外部抛出一系列属性和方法
  // window上保存属性和方法
  console.log(test);
  console.log(test.length);
  console.log(arguments.length);
  console.log('Hello');
})(1,2,3);
```
# demo
采用立即执行函数实现tab插件功能
