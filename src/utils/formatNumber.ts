/**
 * @description: 格式化数字 万/亿
 * @param {number} number 格式化的数字
 * @param {number} length 保留几位小数
 * @return {string} 返回处理后值
 */
export default function formatNumber(number, length = 1) {
	const counter = parseInt(number)
	length = length > 10 ? 10 : length
	if (counter > 100000000) {
		return (counter / 100000000).toFixed(length) + '亿'
	} else if (counter > 10000) {
		return (counter / 10000).toFixed(length) + '万'
	} else {
		return counter + ''
	}
}
