var myEditor = document.querySelector("#editor_btn");
var	mySelf = document.querySelector('#editor_self');
var	myInit = document.querySelector('#init_self');
myEditor.onclick = function () {
	myInit.style.display = 'none';
	mySelf.style.display = 'block';
	this.value = '保存';
}
