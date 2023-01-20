/**
 * @description: 补零操作
 * @param { String/Number } value 需要补零的值
 * @param { Number } length 补零的长度
 * @param { Boolean } type 补在前面还是后面 true 后/false 前
 * @return { String } 返回处理后的值
 */
export default function repairZero(value, length = 2, type = true) {
	value = value.toString()
	let zeroLength = ''
	for (let i = 0; i < length; i++) zeroLength += '0'
	return type ? value + zeroLength : zeroLength + value
}
