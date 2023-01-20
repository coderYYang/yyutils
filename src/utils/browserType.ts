import type { Browser } from '../type'
/**
 * @description: 判断浏览器类型
 * @return {object} 返回浏览器类型和版本号对象
 */
export default function browserType() {
	const userAgent = navigator.userAgent.toLowerCase()
	const testCenter = {
		ie: function isIE() {
			//ie?
			if (!!window.ActiveXObject || 'ActiveXObject' in window) return true
			else return false
		},
		edge: () => {
			return /dge/.test(userAgent)
		},
		chrome: () => {
			return /chrome/.test(userAgent)
		},
		safari: () => {
			return /safari/.test(userAgent) && !/chrome/.test(userAgent)
		},
		opera: () => {
			return /opera/.test(userAgent)
		},
		msie: () => {
			return /msie/.test(userAgent) && !/opera/.test(userAgent)
		},
		mozilla: () => {
			return /mozilla/.test(userAgent) && !/(compatible|webkit)/.test(userAgent)
		}
	}
	const browserObj: Browser = {}
	for (const k in testCenter) {
		const result = testCenter[k]()
		const version = (userAgent.match(/.+(?:rv|it|ra|ie)[\/: ]([\d.]+)/) || [])[1]
		if (result) {
			browserObj.browser = k
			browserObj.version = version
			return browserObj
		}
	}
}
