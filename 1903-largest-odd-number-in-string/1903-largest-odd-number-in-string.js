/**
 * @param {string} num
 * @return {string}
 */
const largestOddNumber = (num) => {
	for (let i = num.length - 1; i >= 0; i--) {
		if (num[i] % 2 !== 0) {
			return num;
		} else {
			num = num.slice(0, -1);
		}
	}
	return num;
};