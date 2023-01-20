/**
 * @description: 防抖
 * @param {Function} fn 需要防抖的函数
 * @param {number} delay 延时时间
 * @param {boolean} immediate 是否立即执行一次
 * @param {Function} resultCallback 结果的回调
 * @return {Function} 返回防抖函数
 */
export default function debounce(fn, delay = 500, immediate = false, resultCallback) {
	// 1.定义一个定时器, 保存上一次的定时器
	let timer: number | null = null
	let isInvoke = false

	// 2.真正执行的函数
	const _debounce = function (...args) {
		return new Promise((resolve, reject) => {
			// 取消上一次的定时器
			if (timer) clearTimeout(timer)

			// 判断是否需要立即执行
			if (immediate && !isInvoke) {
				const result = fn.apply(this, args)
				if (resultCallback) resultCallback(result)
				resolve(result)
				isInvoke = true
			} else {
				// 延迟执行
				timer = setTimeout(() => {
					// 外部传入的真正要执行的函数
					const result = fn.apply(this, args)
					if (resultCallback) resultCallback(result)
					resolve(result)
					isInvoke = false
					timer = null
				}, delay)
			}
		})
	}

	// 封装取消功能
	_debounce.cancel = function () {
		if (timer) clearTimeout(timer)
		timer = null
		isInvoke = false
	}

	return _debounce
}
