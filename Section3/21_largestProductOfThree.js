/*
문제
정수를 요소로 갖는 배열을 입력받아 
3개의 요소를 곱해 나올 수 있는 최대값을 리턴해야 합니다.

입력: 인자 1 : arr
number 타입을 요소로 갖는 임의의 배열

출력: number 타입을 리턴해야 합니다.

주의사항
입력으로 주어진 배열은 중첩되지 않은 1차원 배열입니다.
배열의 요소는 음수와 0을 포함하는 정수입니다.
배열의 길이는 3 이상입니다.

*/
const largestProductOfThree = function (arr) {
  // TODO: 여기에 코드를 작성합니다.
  let MAX = -99;
  let mArr = [];
  let arrLen = arr.length;

  for (let z = 0; z < arrLen - 2; z++) {
    for (let y = z + 1; y < arrLen - 1; y++) {
      for (let x = y + 1; x < arrLen; x++) {
        let multiple = arr[z] * arr[y] * arr[x];
        if (multiple >= MAX) {
          MAX = multiple;
          mArr = [arr[z], arr[y], arr[x]];
        }
      }
    }
  }
  return mArr.reduce((prev, cur) => prev * cur);
};

let output = largestProductOfThree([-5, -4, -3, -2, -1]);
console.log(output); // --> -6
