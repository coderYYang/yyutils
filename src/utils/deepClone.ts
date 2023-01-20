/**
 * @description: 深拷贝
 * @param {object | array} obj 需要拷贝的值
 * @return {object | array} 返回新的对象/数组
 */
export default function deepClone(obj: {} | []): {} | [] {
	const cloneObj = Array.isArray(obj) ? [] : {}
	if (obj && typeof obj === 'object') {
		for (const key in obj) {
			if (obj[key] && typeof obj[key] === 'object') {
				cloneObj[key] = deepClone(obj[key])
			} else {
				cloneObj[key] = obj[key]
			}
		}
	}
	return cloneObj
}
