/* 문제
문자열을 요소로 갖는 배열을 입력받아 문자열을 세로로 읽었을 때의 문자열을 리턴해야 합니다.

입력
인자 1 : arr
string 타입을 요소로 갖는 배열
출력
string 타입을 리턴해야 합니다.
주의 사항
각 문자열의 길이는 다양합니다.
각 문자의 위치를 행, 열로 나타낼 경우, 비어있는 (행, 열)은 무시합니다. */

function readVertically(arr) {
  // TODO: 여기에 코드를 작성합니다.
  // 긴 문자를 찾는다
  // 긴 문자 길이만큼 인덱스를 하나씩 뽑는다

  // 공백은 무시한다
  // 첫글자만 순차로 읽는다

  let MAX = 0;
  for (let y = 0; y < arr.length; y++) {
    for (let x = 0; x < arr[y].length; x++) {
      if (MAX < arr[y].length) MAX = arr[y].length;
    }
  }

  let result = "";
  for (let y = 0; y < MAX; y++) {
    for (let x = 0; x < arr.length; x++) {
      result += arr[x].slice(y, y + 1);
    }
  }

  return result;
}

//   입출력 예시
let input = [
  //
  "hello",
  "wolrd",
];
let output = readVertically(input);
console.log(output); // --> 'hweolllrod'

input = [
  //
  "hi",
  "wolrd",
];
output = readVertically(input);
console.log(output); // --> 'hwiolrd'
