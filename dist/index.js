"use strict";
// tsc index.ts  运行
// 监听模式开起来就是 tsc 就可以
// 定义变量
// 1.字符串类型
var str = 'hellow';
// 2.数字
var num = 123;
//3.布尔值
var ok = true;
var un = undefined;
var nu = null;
// 4.对象标注、
var obj1 = {
    x: 1,
    y: 2
};
// obj1.x  错误
var obj2 = {
    x: 1,
    y: 'st'
};
// obj2  正确，会有提示
// 5.内置对象构造函数名字
var d1 = new Date();
// 6.包装对象
var s1 = new String('abc');
s1.substr(1);
var s2 = 'abcs';
// 字符串是可以赋值给字符对象的，但是如果一个类型是字符串，是不可以把字符串对象赋值给对象类型的
// 7.数组标注
var arr = [];
arr.push('ni');
// arr.push(1)
// 8.元组的标注
var data1 = ['s', 1];
// 9.枚举
var http_code;
(function (http_code) {
    http_code[http_code["ok"] = 200] = "ok";
    http_code[http_code["err"] = 401] = "err";
})(http_code || (http_code = {}));
//编码语义化
console.log(str);
