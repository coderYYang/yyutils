/**
 * @description: 判断 dom 元素有没有下级
 * @param {HTMLElement} el 需要判断的 dom
 * @return {boolean} 有返回 true，返回 false
 */
export default function htmlHasChildren(el: HTMLElement): boolean {
	const children = el.childNodes
	const len = children.length
	for (let i = 0; i < len; i++) {
		if (children[i].nodeType === 1) {
			return true
		}
	}
	return false
}
