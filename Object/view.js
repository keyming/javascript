 // undefined 类型

 var undefinend;

arlert(massage == undefinend) // true;

// Null 类型

var car = null;
alert(typeof car) // object


// 副效应
var age = 29;
var ano = --29 + 2;  // 减加前面先执行

alert(age) // 28
alert(ano) // 30


// 例如
var age = 2;
var num = 20

var num2 = age-- + num // 等于 22
var num3 = age + num  // 等于 21

// 全等和不全等


// 除了在比较之前不转换操作数之外，全等和不全等操作符与相等和不相等操作符没有什么区别。全 等操作符由 3 个等于号(===)表示，它只在两个操作数未经转换就相等的情况下返回 true，如下面的 例子所示:
var result1 = ("55" == 55); //true，因为转换后相等
var result2 = ("55" === 55); //false，因为不同的数据类型不相等
// EqualityOperatorsExample02.htm
 // 在这个例子中，第一个比较使用的是相等操作符比较字符串"55"和数值 55，结果返回了 true。如 前所述，这是因为字符串"55"先被转换成了数值 55，然后再与另一个数值 55 进行比较。第二个比较使 用了全等操作符以不转换数值的方式比较同样的字符串和值。在不转换的情况下，字符串当然不等于数 值，因此结果就是 false。
// 不全等操作符由一个叹号后跟两个等于号(!==)表示，它在两个操作数未经转换就不相等的情况 下返回 true。例如:
var result1 = ("55" != 55); //false，因为转换后相等
var result2 = ("55" !== 55); //true，因为不同的数据类型不相等



//1. 声明变量
// 使用 var 声明的变量会自动被添加到最接近的环境中。在函数内部，最接近的环境就是函数的局部 环境;在 with 语句中，最接近的环境是函数环境。如果初始化变量时没有使用 var 声明，该变量会自 动被添加到全局环境。如下所示:
    function add(num1, num2) {
        var sum = num1 + num2;
return sum; }
var result = add(10, 20); //30
alert(sum); //由于 sum 不是有效的变量，因此会导致错误
// ExecutionContextExample04.htm
//  以上代码中的函数 add()定义了一个名为 sum 的局部变量，该变量包含加法操作的结果。虽然结 果值从函数中返回了，但变量 sum 在函数外部是访问不到的。如果省略这个例子中的 var 关键字，那 么当 add()执行完毕后，sum 也将可以访问到:
    function add(num1, num2) {
    sum = num1 + num2;
return sum; }
var result = add(10, 20); //30 
alert(sum); //30


// 回收机制 

    var element = document.getElementById("some_element");
    var myObject = new Object();
    myObject.element = element;
    element.someObject = myObject;
// 这个例子在一个 DOM 元素(element)与一个原生 JavaScript 对象(myObject)之间创建了循环 引用。其中，变量 myObject 有一个名为 element 
// 的属性指向 element 对象;而变量 element 也有 一个属性名叫 someObject 回指 myObject。由于存在这个循环引用，即使将例子中的 DOM 从页面中 移除
//，它也永远不会被回收。
// 为了避免类似这样的循环引用问题，最好是在不使用它们的时候手工断开原生 JavaScript 对象与 DOM 元素之间的连接。
// 例如，可以使用下面的代码消除前面例子创建的循环引用:
    myObject.element = null;
    element.someObject = null;

//    将变量设置为 null 意味着切断变量与它此前引用的值之间的连接。当垃圾收集器下次运行时，就 会删除这些值并回收它们占用的内存。
//。为了解决上述问题，IE9 把 BOM 和 DOM 对象都转换成了真正的 JavaScript 对象。这样，
// 就避免了 两种垃圾收集算法并存导致的问题，也消除了常见的内存泄漏现象。


// object 类型
var person = new Object(); //构造函数
person.name = "Nicholas";
person.age = 29;

var person = {     // 对象 字面量
	name: 'Nicholas',
	age: 29
}

var person = {}; //与new Object()相同 person.name = "Nicholas";
person.age = 29;


//。开发者。更青睐 对象字变量 语法。 因为语法要求的代码量少 能给人封装的感觉

 function displayinfo(arg) { // 参数
 	var output = '';
 	if (typeof arg.name == "string") {  // 判断 是 字符型 
 		output += 'name:' + age.name + "\n";  
 	} 
 	if (typeof arg.age == "number") {  // 判断 数字型
 		output += 'age:' + arg.age +"\n";
 	}
 	alert(output);
 }

displayinfo({    // 调用函数
	name: 'keyming',
	age: '29'
})