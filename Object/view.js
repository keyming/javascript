//  全局变量

var sum;
sum = 10;
function fn(){
	var sum = 1;
}
console.log(sum); // 10


var sum = 0;
var a = 0;
 all = 100;

 function test(){
 	console.log(a);
 	all = 200;
 	console.log(fn());
 	function fn() {
 		return 2;
 	}
 }

 test();


 for(var i = 3; i < 20; i = i + 2) {
 	if (i % 3 == 2) {
 		i = i + 1;
 	} else {
 		i = i + 2;
 	}
 	console.log(i);
 }