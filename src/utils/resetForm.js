/**
 * @description: 表单重置
 * @param { String } refName 需要重制的表单 ref
 * @return { * }
 */
export default function resetForm(refName) {
	if (this.$refs[refName]) {
		this.$refs[refName].resetFields()
	}
}
