/**
 * @description: 复制
 * @param { any } text 需要复制的文字
 * @return {*}
 */
export default function textCopy(text) {
	const input = document.createElement('input')
	input.value = text
	document.body.appendChild(input)
	input.select()
	document.execCommand('Copy')
	input.style.display = 'none'
	document.body.removeChild(input)
}
