/**
 * @description: 常用正则验证
 * @param {string} str 需要验证的值
 * @param {string} type 需要验证的对象
 * @return {boolean} 通过返回 true，反之 false
 */
export default function checkStr(str: string, type: string): boolean {
	// 常用正则验证，注意type大小写
	const typeMap = {
		// 手机号
		phone: /^1[3|4|5|6|7|8|9][0-9]{9}$/.test(str),
		// 座机
		tel: /^(0\d{2,3}-\d{7,8})(-\d{1,4})?$/.test(str),
		// 身份证
		card: /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(str),
		// 密码以字母开头，长度在6~18之间，只能包含字母、数字和下划线
		pwd: /^[a-zA-Z]\w{5,17}$/.test(str),
		// 邮政编码
		postal: /[1-9]\d{5}(?!\d)/.test(str),
		// QQ号
		qq: /^[1-9][0-9]{4,9}$/.test(str),
		// 邮箱
		email: /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/.test(str),
		// 金额(小数点2位)
		money: /^\d*(?:\.\d{0,2})?$/.test(str),
		// 网址
		url: /(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&:/~\+#]*[\w\-\@?^=%&/~\+#])?/.test(str),
		// IP
		ip: /^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/.test(
			str
		),
		// 日期时间
		date:
			/^(\d{4})\-(\d{2})\-(\d{2}) (\d{2})(?:\:\d{2}|:(\d{2}):(\d{2}))$/.test(str) ||
			/^(\d{4})\-(\d{2})\-(\d{2})$/.test(str),
		// 数字
		number: /^[0-9]$/.test(str),
		// 英文
		english: /^[a-zA-Z]+$/.test(str),
		// 中文
		chinese: /^[\u4E00-\u9FA5]+$/.test(str),
		// 小写
		lower: /^[a-z]+$/.test(str),
		// 大写
		upper: /^[A-Z]+$/.test(str),
		// HTML标记
		html: /<("[^"]*"|'[^']*'|[^'">])*>/.test(str)
	}
	return typeMap[type]
}

