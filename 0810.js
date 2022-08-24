'use strict';
const { ServerResponse } = require("http");

//strict模式，强制通过ver申明变量（可开启可不开腔）


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

//length查询数量的长度
var arr=[1,2,3,3.14,'hello'];//array：数列
arr.length;//取得数列的长度，输出5.
var a=[1,2,3];
a.length;//输出3
a.length=6;//直接给数列的长度赋值，会导致数列的大小发生变化
a;//a变为【1,2,3，emptyx3】//empty：空的
a.length=2;
a;//a变为【1,2】
a[1]=99;
a;//对数列的索引进行赋值会直接修改这个数列，此时a变为【1,99】
a[5]='x';
a;//a=【1,99，emptyx3，’x‘】通过索引赋值超出范围，同样会引起数列的大小变化

//indexOf()查找数列内元素
var arr=[10,20,30,'aaa'];
arr.indexOf(cs);//元素cs未找到，返回-1.
arr.indexOf(10);//元素10的索引为0
arr.indexOf('aaa');//元素aaa的索引为3

//slice()通过索引查询
var arr=[1,2,3,4,5,6,7,8];
arr.slice(0,3);//返回【1,2,3】，从索引0开始，到索引3结束，但不包括索引3.
arr.slice(3);//返回【4,5,6,7,8】，从索引3开始到结果
arr.slice();//返回索引内所有值
var acopy=arr.slice();

//push数列末尾添加元素，pop删除数量末尾的原始：
var arr=[1,2];
arr.push('A','B');//末尾添加若干元素。
arr;//输出【1,2，A,B】
arr.pop();//pop删除最后一个元素。
arr;//输出【1,2，A】
arr.pop;arr.pop;arr.pop;//连续删除三次
arr;//输出【】
arr.pop();//空数组继续pop不会报错，而是返回undefined
arr;//输出【】

//unshift（）往数列的头部添加元素，shift（）将数量的第一个元素删除
var arr=[1,2,3];
arr.unshift('A','B');//数列头部添加AB，返回arr新的长度：5
arr;//输出【A,B，1,2,3】
arr.shift();//删除数列头部A
arr;//输出【B，1,2.3】

//sort（）对数列进行排序，按照默认顺序排序。
var arr=[1,4,2,3,5,7,6];
arr.sort();//按照默认顺序为数列排序
arr;//输出【1,2,3,4,5,6,7】

//reverse（）把整个数列的元素给调个个
var arr=[1,2,3,4,5];
arr.reverse();
arr;//输出[5,4,3,2,1]

//splice()从指定索引位置删除若干元素，然后再从该位置添加若干元素
var arr=[1,2,3,4,5,6];
arr.splice(2,3,'A','B');//从索引2开始，删除三个值，在增加两个值
arr;//输出【1,2，A，B，6】
arr.splice(4,0,'C','D');//从索引3开始，不删除，只增加两个值
arr;//输出[1,2，A,B,C,D,6]

//concat()将当前数列和另一个数列连接起来，并返回一个新的数列
var arr=['A','B','C'];
var arr2=arr.concat([1,2,3]);
arr2;//输出[‘A','B','C',1,2,3]
arr;//输出['A','B','C']//concat并未修改当前的数列，而是拼接后成为一个新的数列

//join('')将数列内的每个元素都用指定的字符串连接起来，然后返回连接后的字符串
var arr=['A','B','C',1,2,3];
arr.join('-');//输出[A-B-C-1-2-3]



var xiaoming={
    name:'小明',
    age:20,
    sex:'男',
    school:'北大',
    'ABC':'abc'
};
xiaoming.name;//输出'小明'
xiaoming['ABC'];//输出'abc'
'name' in xiaoming; //输出true，可用in监测xiaoming是否拥有某一属性
'grade' in xiaoming;//输出false


var xiaohong={
    name:'小红'
};
xiaohong.age=18;//新增一个age属性
delete xiaohong.age;//删除age属性

var age=20;
if (age>=20)
{alert('adult');}
else{console.log('age<18');
alert('teenager');}






