// function 키워드
// 함수 이름
// 매개변수 목록
// Java의 메서드랑 비슷한데,
// 반환형, 매개변수 자료형 이 생략

// 함수 선언식
function add(a, b) {
  return a + b;
}
/*
public int add(int a, int b) {}
public long add(long a, long b) {}
*/
console.log(add(1, 2));
console.log(add("a", "b"));
console.log(add(true, false));
console.log(add(Infinity, -Infinity));

// 일급 객체
// First class citizen
// 일반적인 프로그래밍 언어에서
// 1. 함수의 인자로 전달 가능하고,
// 2. 함수의 반환값으로 반환이 가능하고,
// 3. 어떤 변수에 할당이 가능한
// 객체를 일급 객체라고 부른다.

// 함수 표현식
const subtract = function(a, b) {
  return a - b;
}
console.log(subtract(10, 5));


// 함수 선언식 -> hoisting 일어남
hoistedFun();
function hoistedFun() {
  console.log("this function is hoisted");
}

// 함수 표현식 -> hoisting 일어나지 않음
// notHoistedFun();   // ReferenceError
const notHoistedFun = function() {
  console.log("this function is not hoisted");
}

// Arrow Function
// 화살표 함수
const arrowMulti = (a, b) => {
  return a * b;
}

const arrowSquare = a => {
  return a * a;
}

// 한개의 결과를 반환하는 화살표 함수
const arrowCube = (a) => a * a * a;

console.log(arrowMulti(2, 3));
console.log(arrowSquare(2));
console.log(arrowCube(3));


// 함수에 인자 전달하기
// 1. 기본값(default) 설정하기
const getMessage = function(name = "Anonymous") {
  return `Hi ${name}!!!`;
}
// Hi Jeeho Park!!!
console.log(getMessage("Jeeho Park"));
// Hi Anonymous!!!
console.log(getMessage());

const multiply = function(a, b = 1) {
  return a * b;
}
console.log(multiply(10));
console.log(multiply(10, 2));


// 2. 매개변수와 인자의 갯수 불일치 허용
console.log("////////////");
const divide = function(a, b) {
  console.log(a);
  console.log(b);
  return a / b;
}

console.log(divide());
console.log(divide(1));
console.log(divide(1, 2));
console.log(divide(1, 2, 3));
console.log(divide(1, 2, 3, 4, 5, 6, 7, 8));


// 3. Spread Syntax (...)
const fewNum = [1, 2];
// ...을 이용해서 배열의 원소들을
// 새로운 배열의 원소들에 할당 가능
// const numbers = [0, fewNum, 3, 4];  // [0, [1, 2], 3, 4]
const numbers = [0, ...fewNum, 3, 4];
// [0, 1, 2, 3, 4]
console.log(numbers);

// 함수에 여러 인자를 배열에서 꺼내서 전달 가능
console.log(add(...fewNum));
console.log(add(...numbers));

// 함수를 만들때도 하나의 매개변수에 데이터를 받기 위해 사용 가능
const sum = function(...numbers) {
  let sum = 0;
  for (const number of numbers) {
    sum += number;
  }
  return sum;
}
// 여러 인자를 전달하거나
console.log(sum(1, 2, 3));
// 배열을 spread해서 전달
console.log(sum(...numbers));


// Extra: Object의 spread syntax
const jeeho = {
  firstName: "Jeeho",
  lastName: "Park",
}

const person = {
  ...jeeho,
  email: "edujeeho@gmail.com",
}

console.log(person);


