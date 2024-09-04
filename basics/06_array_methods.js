// reverse
// 배열의 원소를 반대로
const numbers = [0, 1, 2, 3, 4];
numbers.reverse();
console.log(numbers);

const cities = ["서울", "대전", "대구", "부산"];
cities.reverse();
console.log(cities);


// push & pop
// 스택의 push & pop 같이
// 배열의 끝에 원소를 더하고 뺀다.
numbers.push(5);
numbers.push(6);
console.log(numbers);
console.log(numbers.pop());
console.log(numbers.pop());


// unshift & shift
// 배열의 앞에 원소를 더하고 뺀다.
cities.unshift("광주");
cities.unshift("강릉");
console.log(cities);
cities.unshift("Beijing");
console.log(cities.shift());


// includes & indexOf
console.log(cities.includes("강릉"));
console.log(cities.includes("제주"));
console.log(numbers.includes("0"));

const dIdx = cities.indexOf("대구");
console.log(cities[dIdx]);
const jIdx = cities.indexOf("제주");
console.log(jIdx);  // -1
console.log(cities[jIdx]);  // undefined


// Array Helper Methods
// => Java의 Stream이랑 비슷하다.
// Array의 각 원소에 적용할 함수를 전달함으로서
// 기능을 제공한다.

const action = function (target) {
  console.log(target + target);
}
// apply의 두번째 매개변수는 함수이다.
const apply = function (target, callback) {
  callback(target);
}

// 인자로 전달되는 함수를 일반적으로
// callback 함수라고 부른다.
apply(10, action);
apply(10, (target) => {
  console.log(target + target + target);
});


// forEach
numbers.forEach(function (element, index, array) {
  console.log(`element: ${element}`);
  console.log(`index: ${index}`);
  console.log(`array: ${array}`);
});

numbers.forEach(function(element) {
  console.log(`element: ${element}`);
});

numbers.forEach(console.log);
numbers.forEach(function (e, i, a) {
  console.log(e, i, a);
});


// map
// 배열의 각 원소를 바탕으로
// callback을 호출하고
// 그 결과를 모아 새로운 배열을 만든다.
const doubled = numbers.map(function (element, index, array) {
  return element * 2;
});
console.log(doubled);


// filter
// 배열의 각 원소를 바탕으로
// callback을 호출하고
// 결과가 true인 원소만 모아서 새로운 배열을 만든다.
const evens = numbers.filter(function (element) {
  return element % 2 === 0;
});
console.log(evens);

const odds = numbers.filter(element => element % 2 !== 0);
console.log(odds);


// reduce
// 각 배열의 요소에 대해 callback을 실행
// 그 결과를 다음 callback 호출에 전달
// 마지막 callback의 결과를 반환
const scores = [90, 90, 80, 77];
const sum = scores.reduce(function (acc, e, i, a) {
  return acc + e;
}, 0);
console.log(sum);
