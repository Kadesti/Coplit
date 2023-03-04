/**
 compressString
문제
문자열을 입력받아 
연속되는 문자가 있을 경우, 
연속 구간을 반복되는 수와 문자로 조합한 형태로 압축한 문자열을 리턴해야 합니다.

입력 : str
string 타입의 알파벳 문자열

출력 : string 타입을 리턴해야 합니다.

주의 사항
빈 문자열을 입력받은 경우, 빈 문자열을 리턴해야 합니다.
3개 이상 연속되는 문자만 압축합니다.


입력: 문자열
출력: 문자열 [반복되는 수와 문자로 조합 + 압축]
빈문자열 리턴
3개 이상이면 1개로 압축 / 2개까지 ok

 */
function compressString(str) {
  // TODO: 여기에 코드를 작성합니다.

  if (str === "") return "";

  const arr = str.split("");
  let newArr = [];
  let cnt = 0;
  let x = 0;

  for (let y = 0; y < arr.length - 2; y++) {
    if (arr[y] === arr[y + 1] && arr[y] === arr[y + 2]) {
      while (1) {
        if (arr[y] === arr[y + x]) {
          x++;
          cnt++;
        } else {
          newArr = [...newArr, `${cnt}${arr[y]}`];
          y += cnt - 1;
          cnt = 0;
          x = 0;
          break;
        }
      }
    } else { newArr = [...newArr, arr[y]]; }

    if (y === arr.length - 3) newArr = [...newArr, arr[y + 1], arr[y + 2]];
  }

  return newArr.join("");
}

let output = compressString("abc");
console.log(output); // --> abc

output = compressString("wwwggoppopppp");
console.log(output); // --> 3wggoppo4p
