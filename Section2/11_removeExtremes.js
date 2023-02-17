function removeExtremes(arr) {
  // TODO: 여기에 코드를 작성합니다.
  // 입력: 배열 [문자열]
  // 출력: 배열 [가장 짧은 문자열, 가장 긴 문자열 제거]
  // 가장 짧은 문자열 저장후 비교
  // 가장 긴 문자열 저장 후 비교
  // 비교하는 인덱스 값 저장
  // splice로 인덱스 값 제외

  let result = [];
  result = arr.map((el) => el);

  let shortLen = (longLen = arr[0].length);
  let shortIndex = (longIndex = 0);

  for (let i = 0; i < result.length; i++) {
    if (shortLen >= result[i].length) {
      shortLen = result[i].length;
      shortIndex = i;
    }
  }
  result.splice(shortIndex, 1);

  for (let i = 0; i < result.length; i++) {
    if (longLen <= result[i].length) {
      longLen = result[i].length;
      longIndex = i;
    }
  }
  result.splice(longIndex, 1);

  return result;
}
