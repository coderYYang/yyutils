/**
 * @description: 将 HTML 元素内的字符提取出来
 * @param {string} el 需要提取字符的元素
 * @return {string} 返回 dom 元素中的字符
 */
export default function htmlToText(el: string): string {
	const div = document.createElement('div')
	div.innerHTML = el
	return div.textContent || div.innerText
}
