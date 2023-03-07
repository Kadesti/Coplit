/*
문제
아래와 같이 정의된 피보나치 수열 중 
n번째 항의 수를 리턴해야 합니다.

0번째 피보나치 수는 0이고, 
1번째 피보나치 수는 1입니다. 
그 다음 2번째 피보나치 수부터는 
바로 직전의 두 피보나치 수의 합으로 정의합니다.
0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, ...

입력 / 인자 1 : n
number 타입의 n (n은 0 이상의 정수)

출력: number 타입을 리턴해야합니다.

주의사항
재귀함수를 이용해 구현해야 합니다.
반복문(for, while) 사용은 금지됩니다.
함수 fibonacci가 반드시 재귀함수일 필요는 없습니다.

Advanced
피보나치 수열을 구하는 효율적인 알고리즘(O(N))이 존재합니다. 재귀함수의 호출을 직접 관찰하여 비효율이 있는지 확인해 보시기 바랍니다.

*/
// function fibonacci(n) {
//   // TODO: 여기에 코드를 작성합니다.

//   // base case
//   if (n <= 1) return n;

//   // recursiva case
//   return fibonacci(n - 1) + fibonacci(n - 2);
// }

function helper(limit, a, b) {
  if (limit === 0) return a;
  else if (limit === 1) return b;
  else return helper(limit - 1, b, b + a);
}

function fibonacci(n) {
  // TODO: 여기에 코드를 작성합니다.

  return helper(n, 0, 1);
}

///////////

function fibonacci(n, lastlast = 0, last = 1) {
  // base case
  if (n === 0) return lastlast;
  else if (n === 1) return last;

  return fibonacci(n-1, last, lastlast+last);
}

// 0 1 2 3 4 5
// 0 1 1 2 3 5

/*
  fibonacci(5) // => 5
  fibonacci(5, 0, 1) // 5

  fibonacci(4, 1, 1) // 5
  fibonacci(3, 1, 2) // 5
  fibonacci(2, 2, 3) // 5
  fibonacci(1, 3, 5) // 5

  fibonacci(?, 5, 8)
  fibonacci(?, 8, 13)
*/

let fibonacci = function (n) {
  const memo = [0, 1];

  const aux = (n) => {
    // 이미 해결한 적이 있으면, 메모해둔 정답을 리턴한다.
    if (memo[n] !== undefined) return memo[n];

    // 새롭게 풀어야하는 경우, 문제를 풀고 메모해둔다.
    memo[n] = aux(n - 1) + aux(n - 2);

    return memo[n];
  };
  return aux(n);
};


/*
      fibonacci(5)
      helper(5, 0, 1);
      helper(4, 1, 1 + 0);
      helper(3, 1, 1 + 1);
      helper(2, 2, 2 + 1);
      helper(1, 3, 3 + 2); -> return 5 // b
  
      helper(limit - 1, b, b + a) (O)
      helper(limit--, b, b + a)   (X)
      helper(--limit, b, b + a)   (O)
  
  */

let fibonacci = function (n) {
  const memo = [0, 1];

  const aux = (n) => {
    // 이미 해결한 적이 있으면, 메모해둔 정답을 리턴한다.
    if (memo[n] !== undefined) return memo[n];

    // 새롭게 풀어야하는 경우, 문제를 풀고 메모해둔다.
    memo[n] = aux(n - 1) + aux(n - 2);

    return memo[n];
  };
  return aux(n);
};

/*
    갑툭튀 n번째 요소? DAT같은 느낌..?
    결국에 aux(n - 1) + aux(n - 2)를 진행하면서
    n번째 배열의 요소에 저장해두고

    // fibonacci(5)
    // memo = [0,1] // memo[n] = undefined

    // 1회차 aux(5)
    memo[n] = aux(n - 1) + aux(n - 2); 를 할당하고
    return memo[n]; 를 리턴
    리턴 값이 aux(n)이므로 한번 더 실행

    // 2회차 aux(5)
    // memo = [0,1] // memo[n] = aux(n - 1) + aux(n - 2);
    if (memo[n] !== undefined) return memo[n];
    // return aux(n - 1) + aux(n - 2);

    // aux(n - 1)
    if (memo[n - 1] !== undefined) return memo[n - 1];
    return aux(n - 1 - 1) + aux(n - 2 - 1);

    ...
    결국 0 또는 1에 도달
    const memo = [0, 1];
    이 값을 배열에 채워가며 +1 +2 번째 요소를 채워감
    결국 n번째 요소를 리턴 받으며 종료
*/ 


let output = fibonacci(0);
console.log(output); // --> 0

output = fibonacci(1);
console.log(output); // --> 1

output = fibonacci(5);
console.log(output); // --> 5

output = fibonacci(9);
console.log(output); // --> 34
