/**
 * @description: 获得滚动条的滚动距离
 * @return { Object } 返回一个对象 x: 水平滚动距离 y: 垂直滚动距离
 */
export default function getScrollOffset() {
	if (window.pageXOffset) {
		return {
			x: window.pageXOffset,
			y: window.pageYOffset
		}
	} else {
		return {
			x: document.body.scrollLeft + document.documentElement.scrollLeft,
			y: document.body.scrollTop + document.documentElement.scrollTop
		}
	}
}
