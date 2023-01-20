/**
 * @description: 添加/删除 dom 元素的 class
 * @param {HTMLElement} el 需要添加/删除 dom 的 class
 * @param {string} className 需要添加/删除的 class
 * @return {*}
 */
export default function htmlAddOrRemoveClass(el: HTMLElement, className: string) {
	if (!el || !className) {
		return
	}
	let classString = el.className
	const nameIndex = classString.indexOf(className)
	if (nameIndex === -1) {
		classString += '' + className
	} else {
		classString = classString.substr(0, nameIndex) + classString.substr(nameIndex + className.length)
	}
	el.className = classString
}
