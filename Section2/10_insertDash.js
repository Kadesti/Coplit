function insertDash(str) {
  // TODO: 여기에 코드를 작성합니다.
  let result = str[0];

  for (let i = 1; i < str.length; i++) {
    let preNum = str[i - 1];
    let curNum = str[i];

    if (preNum % 2 && curNum % 2) result += '-';
    result += str[i];
  }
  return result;
}

let output = insertDash('454793');
console.log(output); // --> 4547-9-3
