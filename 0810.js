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

var s='HELLO,world!';
s.length;//获取字符串的数量，length：长、长度。
s.toUpperCase();//把字符串全部变为大写，toUpperCase：转换为大写
s.toLowerCase();//将字符串全部变为小写，tolowercase：转换为小写
console.log(s);//输出s的内容到控制台，console：控制台。
alert(s);//弹窗输出s，alert：提示，提醒。
s.indexOf('world')//返回6，查找指定字符串的位置
s.indexOf('a')//没有指定字符串，返回-1
s.substring(0,5);//返回：HELLO,从索引0开始取值到5（不包含5）
s.substring(6);//从索引6开始取值到结束，返回：world


