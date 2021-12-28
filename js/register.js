function checkForm() {
	var username = document.getElementById("username");
	var password = document.getElementById("password");
	var conpassword = document.getElementById("confirmpassword");
	var email = document.getElementById("email");
	var phone = document.getElementById("phone");

	var regx_username = /^[a-zA-Z0-9_-]{4,16}$/;
	var regx_password = /^.*(?=.{6,})(?=.*\d)(?=.*[a-z]).*$/;
	var regx_email = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
	var regx_phone = /^((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(18[0,5-9]))\d{8}$/;

	if (!regx_username.test(username.value)) {
		alert("用户名为 4到16位（字母，数字，下划线，减号）");
		return false;
	}
	if (!regx_password.test(password.value)) {
		alert("密码最少6位，包括至少1个小写字母，1个数字");
		return false;
	}
	if (!regx_email.test(email.value)) {
		alert("请输入正确的邮箱！！");
		return false;
	}
	if (!regx_phone.test(phone.value)) {
		alert("请输入正确的手机号！");
		return false;
	}
	if (!(password.value == confirmpassword.value)) {
		alert("两次输入的密码不一致");
		return false;
	}

	document.cookie = "username= " + username.value;
	document.cookie = "password=" + password.value;
	alert("注册成功");
	return true;
}
