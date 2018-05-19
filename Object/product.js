function product(){
	this.title = ''
	/*价格*/
	this.price = 0
	/*图片*/
}

product.prototype = {
	buy:function() {

	},
	bindDom:function() {
		var str = '';
		str+='<div class="content">'
		str+='<div class="images">'
		str+='<img src="">'
		str+='</div>'
		str+='<div ="name">'
		str+='<h2 class="title">'+this.title+'</h2>'
		str+='<p class="price">'+this.price+'</p>'
		str+='</div>'
		str+='</div>'
		return str;
	}
	coty:function(obj) {
		var newObj = {};
		for (var arr in obj) {
			newObj[arr] = obj[arr];
		}
		return arrObj;
	}ßßßß
}