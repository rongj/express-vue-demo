/**
 * 返回结果格式化
 */
function jsonWrite(res, code, data) {
	var codeMsg = {
		200: "成功",
		201: "错误",
		400: "参数错误",
		401: "权限不足",
		402: "重复提交",
		403: "请先登录",
		405: "未绑定手机号",
		406: "包含违禁词",
		500: "系统异常",
	}
	res.json(Object.assign({
		code: code,
		msg: codeMsg[code]
	}, {data}))
}

module.exports = jsonWrite;