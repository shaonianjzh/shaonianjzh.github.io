<<<<<<< HEAD
function checkForm() {
	var username = document.getElementById("username");
	var password = document.getElementById("password");
	
	if (username.value == getCookie("username") && password.value == getCookie("password")) {
		
		alert("登录成功");
		return true;
		
	} else {
		alert("账号或密码错误！");
		return false;
	}
}

function getCookie(cname) {
	
	var name = cname + "=";

	var arrays = document.cookie.split(";");
	for (var i = 0; i < arrays.length; i++) {

		var c = arrays[i].trim();
		if (c.indexOf(name) == 0)
			return c.substring(name.length, c.length);
	}
	return "";
=======
function checkForm() {
	var username = document.getElementById("user");
	var password = document.getElementById("password");

	if (username.value == getCookie("username") && password.value == getCookie("password")) {
		alert("登录成功");
		return true;
	} else {
		alert("账号或密码错误！");
		return false;
	}
}

function getCookie(cname) {

	var name = cname + "=";

	var arrays = document.cookie.split(";");
	for (var i = 0; i < arrays.length; i++) {

		var c = arrays[i].trim();
		if (c.indexOf(name) == 0)
			return c.substring(name.length, c.length);
	}
	return "";
>>>>>>> 26406d4ad83abacd1d3262a7926608bc6df32f1e
}
