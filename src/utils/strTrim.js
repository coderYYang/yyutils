/*
 * @Author: yy 691335336@qq.com
 * @Date: 2023-01-10 17:22:00
 * @LastEditors: yy 691335336@qq.com
 * @LastEditTime: 2023-01-11 13:54:12
 * @FilePath: /city-brain-utils/src/strTrim.js
 * @Description:
 */
/**
 * @description: 去除字符串空格
 * @param { String } str 需要去除空格的字符串
 * @param { String } type 去除空格的位置
 * @return { String } 返回处理的值
 *
 * all ---> 全部
 * left ---> 左边
 * right ---> 右边
 * leftAndRight ---> 左右
 */
export default function strTrim(str, type = 'all') {
	const typeMap = {
		// 去除所有空格
		all: str.replace(/\s+/g, ''),
		// 去除左边所有空格
		left: str.replace(/^\s/, ''),
		// 去除右边所有空格
		right: str.replace(/(\s$)/g, ''),
		// 去除头和尾
		leftAndRight: str.replace(/^\s+|\s+$/g, '')
	}
	return typeMap[type]
}
