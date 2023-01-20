/**
 * @description: dom 元素上是否存在当前 class
 * @param {HTMLElement} el 需要检测的 dom
 * @param {string} className 需要检测类名
 * @return {boolean} 存在返回 true，反之 false
 */
export default function htmlHasClass(el: HTMLElement, className: string): boolean {
	return !!el.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'))
}
