/*문제
연이율을 입력받아 원금이 2배 이상이 될 때까지 걸리는 시간(년)을 리턴해야 합니다.

입력
인자 1 : interestRate
number 타입의 연이율 (%)
출력
number 타입을 리턴해야 합니다. */

function computeWhenDouble(interestRate) {
  // TODO: 여기에 코드를 작성합니다.

  // 연이율을 입력받아
  // 원금이 2배 이상이 될 때까지 걸리는 시간(년)을 리턴해야 합니다.

  // 입력: 연 이율
  // 출력: 시간(년) [원금이 2배 이상이 되는 때]

  // 연이율이 반영되는 방식
  // let result = interestRate
  // result = 1 + 1 * result
  // year++;
  // if(result === interestRate * 2) return year;

  let year = 0;
  let result = 1;
  do {
    result = result + (result * interestRate) / 100;
    year++;
  } while (result < 2);

  return year;
}

let output = computeWhenDouble(7);
console.log(output); // --> 11

output = computeWhenDouble(10);
console.log(output); // --> 8
