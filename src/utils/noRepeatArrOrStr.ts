/**
 * @description: 数组/字符串去重
 * @param {arrar | string} value 需要去重的数组/字符串
 * @return {arrar | string} 返回一个新的数组/字符串
 */
export default function noRepeatArrOrStr(value: any[] | string): any[] | string {
	if (Array.isArray(value)) {
		return [...new Set(value)]
	} else {
		return [...new Set(value)].join('')
	}
}
