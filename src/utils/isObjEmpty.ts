/**
 * @description: 判断对象是否有键值对
 * @param {Object} obj 需要判断的对象
 * @return {boolean} 有返回 true，反之 false
 */
export default function isObjEmpty(obj: {}): boolean {
	for (let key in obj) {
		return true
	}
	return false
}
