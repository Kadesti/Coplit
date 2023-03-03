/**
 * 문제
암호화된 문자열과 암호화 키를 입력받아 복호화된 문자열을 리턴해야 합니다.
카이사르 암호(Caesar cipher)는 평문(plaintext)을 암호키 secret개만큼 (오른쪽으로) 평행이동시켜 암호화 합니다. 
복호화는 암호화된 문자열을 원래의 평문으로 복원하는 것을 말합니다.
'hello'를 secret 3으로 암호화한 경우: 'khoor'
'codestates'를 secret 11로 암호화한 경우: 'nzopdelepd'

 * 입력
  인자 1 : str
  string 타입의 알파벳 소문자 문자열
  인자 2 : secret
  number 타입의 암호화 키

 * 출력 : string 타입을 리턴해야 합니다.

 * 주의 사항
  빈 문자열을 입력받은 경우, 빈 문자열을 리턴해야 합니다.
  공백은 그대로 두어야 합니다.

  입력 값의 왼쪽으로 secret만큼

  예외처리 빈 문자열
  str.map(ch => ch - secret)
  if(let i = 0; i < str.length; i++) if(str[i] === ' ' - 3) str[i] + secret;
  return str;

 */

function decryptCaesarCipher(str, secret) {
  // TODO: 여기에 코드를 작성합니다.
  if (str === "") return "";

  let arr = str.split("").map((ch) => ch.charCodeAt());
  let newArr = [];

  const blank = " ".charCodeAt();

  for (let i = 0; i < arr.length; i++) {
    if (97 <= arr[i] && arr[i] <= 122 && arr[i] - secret < 97) newArr[i] = 123 - (secret - (arr[i] - 97));
    else if (65 <= arr[i] && arr[i] <= 90 && arr[i] - secret < 65) newArr[i] = 91 - (secret - (arr[i] - 65));
    else if (arr[i] === blank) newArr[i] = blank;
    else newArr[i] = arr[i] - secret;
  }

  return newArr.map((ch) => String.fromCharCode(ch)).join("");
}

let output = decryptCaesarCipher("khoor", 3);
console.log(output); // --> hello

output = decryptCaesarCipher("zruog", 3);
console.log(output); // --> world


output = decryptCaesarCipher("nzop delepd dfaazced jzf", 11);
console.log(output); // --> code states supports you

output = decryptCaesarCipher('khoor zruog', 3);
console.log(output); // --> hello world

output = decryptCaesarCipher('mnv xnt zqd qdzcx sn lnud sn hlldqrhud bntqrd', 25);
console.log(output); // --> now you are ready to move to immersive course