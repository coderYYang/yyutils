/**
 * @description: 获得视口的宽高（包括滚动条）
 * @return { Object } 返回一个对象 width: 宽度 height: 高度
 */
export default function getViewWH() {
	if (window.innerWidth) {
		return {
			width: window.innerWidth,
			height: window.innerHeight
		}
	} else {
		// ie8及其以下
		if (document.compatMode === 'BackCompat') {
			// 怪异模式
			return {
				width: document.body.clientWidth,
				height: document.body.clientHeight
			}
		} else {
			// 标准模式
			return {
				width: document.documentElement.clientWidth,
				height: document.documentElement.clientHeight
			}
		}
	}
}
