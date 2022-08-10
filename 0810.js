'use strict';//strict模式，强制通过ver申明变量（可开启可不开腔）


var x=1;//var 申明变量x，同时给变量x赋值，此时x为1
console.log(x);//使用console.log()直接输出x的结果
alert(x);//弹出对话框，显示x的值

var a=[1,2,4,6,3.14,'hello',null];
a=[0]; //索引，返回值为1
a=[4];

'I\'m ok';//输出I'm ok，\为转义字符，将本身代表引用的‘变为字符输出
// \n换行（可用反引号``来表示），\t制表符
`这是一个
多行
字符串`;//反引号即~键
//反引号还可以替代加号：
var name='小明';
var age=20;
console.log(`你好,${name},你今年${age}岁了`);//反引号的使用



