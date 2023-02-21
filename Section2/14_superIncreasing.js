/* 문제
수를 요소로 갖는 배열을 입력받아 
각 요소들이 그 이전의 요소들의 합보다 큰지 여부를 리턴해야 합니다.

입력
인자 1 : arr
수를 요소로 갖는 배열
arr[i]는 정수

출력
boolean 타입을 리턴해야 합니다.
arr[i]는 arr[0]부터 arr[i-1]까지의 합보다 커야 합니다 */

function superIncreasing(arr) {
  // TODO: 여기에 코드를 작성합니다.
  // while로 돌면서
  // i + 1이 null 이면 i와 i - 1까지의 합을 비교
  // 아니면 i-1를 합산
  //
  // 고차함수로 돌면서 마지막보다 작은수를 담은 배열 확인
  // 이 때의 길이가 len - 1이면 true
  //
  // 길이를 구한다
  // 길이 - 2 만큼 더하고
  // 길이 - 1번째와 비교한다.
  const arrLen = arr.length;
  let sum = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    if (sum <= arr[i]) return false;
    sum += arr[i];
  }

  return false;
}
