/**
 * @description: 检测数据类型
 * @param {any} data 需要检测的数据
 * @return {string} 返回数据类型
 *
 * string ---> [object String]
 *
 * number ---> [object Number]
 *
 * symbol ---> [object Symbol]
 *
 * undefined ---> [object Undefined]
 *
 * null ---> [object Null]
 *
 * function ---> [object Function]
 *
 * date ---> [object Date]
 *
 * object ---> [object Object]
 *
 * array ---> [object Array]
 *
 * regExp ---> [object RegExp]
 *
 * error ---> [object Error]
 *
 * HTMLHtmlElement ---> [object HTMLHtmlElement]
 *
 * document ---> [object HTMLDocument]
 *
 * window ---> [object Window]
 */
export default function dataType(data: any): string {
	return Object.prototype.toString.call(data)
}
