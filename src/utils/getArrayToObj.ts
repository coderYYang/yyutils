/**
 * @description: 根据 key 在数组中找到当前对象
 * @param {array} arr 需要查找的数组
 * @param {string} key 根据对象中的 key 查找
 * @param {string | number} id 匹配 key 的值
 * @return {Object} 返回找到的对象
 */
export default function getArrayToObj(arr: any[], key: string, id: string): {} {
	let obj = {}
	for (let i = 0; i < arr.length; i++) {
		if (arr[i][key] === id) {
			obj = arr[i]
			return obj
		}
		if (arr[i].children && arr[i].children.length) {
			obj = getArrayToObj(arr[i].children, key, id)
			if (Object.keys(obj).length) return obj
		}
	}
	return obj
}
