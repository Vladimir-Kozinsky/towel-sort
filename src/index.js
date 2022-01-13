
// You should implement your task here.

module.exports = function towelSort(matrix) {
  let resultArr = []
if (!matrix) {
  return resultArr
}
  function pushToResult(arr) {
    arr.forEach(element => {
      resultArr.push(element)
    });
  }

  for (let i = 0; i < matrix.length; i++) {
    const arr = matrix[i];
    if (i % 2 == 0) {
      pushToResult(arr)
    } else {
      pushToResult(arr.reverse())
    }
  }

  return resultArr
}
