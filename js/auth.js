/**
 * 注册、登录、找回
 * @auther aliketh.xhmy
 * @version 0.0.1
 */


/**
 * 注册时通过ajax异步验证用户名是否重复
 */
function checkUName() {
	$.post({
		url: 'http://localhost:8080/checkUName',
		data: {
			'name': $("#name").val()
		},
		success: function(data) {
			var ms = data.msg;
			console.log(ms);
			if ("true" === ms) {
				// 通过时 改变用户名输入框的边框颜色为绿色
				document.getElementById('name').style.borderColor = "green";
				// document.getElementById('btn-register').style.backgroundColor = "red";
				// 使注册按钮生效
				$("#btn-register").attr("disabled", false);
			}
			if ("false" === ms) {
				// 不通过时 改变用户名输入框的边框颜色为红色
				document.getElementById('name').style.borderColor = "red";
				// document.getElementById('btn-register').style.display = "unset";
				// 使注册按钮改变背景颜色
				document.getElementById('btn-register').style.backgroundColor = "red";
				// 使注册按钮失效
				$("#btn-register").attr("disabled", true);
			}

		}
	})
}
