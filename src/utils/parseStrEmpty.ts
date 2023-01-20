/**
 * @description: 转换字符串，undefined,null等转化为""
 * @param {any} str
 * @return {any}
 */
export default function parseStrEmpty(str: any): any | '' {
	if (!str || str == 'undefined' || str == 'null') {
		return ''
	}
	return str
}
