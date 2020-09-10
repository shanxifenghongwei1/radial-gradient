
// tsc index.ts  运行
// 监听模式开起来就是 tsc 就可以

// 定义变量
// 1.字符串类型
let str:String = 'hellow'
// 2.数字
let num:number=123
//3.布尔值
let ok:boolean = true
let un:undefined = undefined
let nu:null = null
// 4.对象标注、
let obj1:Object = {
    x:1,
    y:2
};
        // obj1.x  错误
let obj2:{x:number,y:string}={
    x:1,
    y:'st'
}
        // obj2  正确，会有提示
// 5.内置对象构造函数名字
let d1:Date = new Date()

// 6.包装对象
let s1:String = new String('abc')
s1.substr(1)
let s2:string = 'abcs'
// 字符串是可以赋值给字符对象的，但是如果一个类型是字符串，是不可以把字符串对象赋值给对象类型的




// 7.数组标注
let arr:string[] = []
arr.push('ni')
// arr.push(1)

// 8.元组的标注
let data1:[string,number] = ['s',1]
// 9.枚举
enum http_code{
    ok=200,
    err=401
}
//编码语义化
console.log(str)