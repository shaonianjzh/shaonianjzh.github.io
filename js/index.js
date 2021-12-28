<<<<<<< HEAD
function IsLogin1() {
	if (getCookie("username").trim().length==0 && getCookie("password").trim().length==0) {
		alert("请先登录");
		return false;
	} else {
		document.getElementById("myfavorite").href = "myfavorite1.html";
	}
}

function IsLogin2() {
	if (getCookie("username").trim().length==0 && getCookie("password").trim().length==0) {
		alert("请先登录");
		return false;
	} else {
		document.getElementById("route").href = "route_detail.html";
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
function IsLogin1() {
	if (getCookie("username").trim().length==0 && getCookie("password").trim().length==0) {
		alert("请先登录");
		return false;
	} else {
		document.getElementById("myfavorite").href = "myfavorite1.html";
	}
}
function IsLogin2() {
	if (getCookie("username").trim().length==0 && getCookie("password").trim().length==0) {
		alert("请先登录");
		return false;
	} else {
		document.getElementById("route").href = "route_detail.html";
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
