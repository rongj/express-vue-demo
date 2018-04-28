/**
 * 返回结果格式化
 * 如果data传字符串返回msg信息,如果是键值对就返回data对象
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
		code,
		msg: typeof data === 'string' ? data : codeMsg[code]
	}, typeof data === 'object' ? { data } : {}))
}

module.exports = jsonWrite;