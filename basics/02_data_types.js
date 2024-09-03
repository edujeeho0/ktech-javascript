// Number
// 모든 숫자 (정수, 실수, 무한대)
// 정수
const length = 5;
const size = 10;
// 실수
const temperature = 36.5;
const distance = 3.4;
// 부동소숫점 (e)
// 2.998 * 10^8
const floatingPoint = 2.998e8;

// 무한대, -무한대
const infinite = Infinity;
const infNegative = -Infinity;

// Not a Number
const notANum = NaN;
// 문자열을 정수로 바꾸려고 할때
const parsedInt = parseInt("a");
console.log(parsedInt);
// 음수를 제곱할 때
const negSqrt = Math.sqrt(-1);
console.log(negSqrt);
// NaN을 포함해서 연산을 하면?
console.log(1 + NaN);


// String
// ''도, ""도 문자열이다.
const firstName = 'Jeeho';
const lastName = "Park";
// 문자열을 "+" 으로 덧붙일 수 있다.
const fullName = firstName + " " + lastName;
console.log(fullName);

// \n으로 줄바꿈 표현 (escape sequence)
console.log("escape\nsequence");
// 평범한 문자열 내부에 줄바꿈은 성립하지 않는다.
/*
const sentence = "this cannot be
done";
*/

// Template Literal
// Backtick으로 만든다.
const message = `
Hello, ${fullName}
`;
console.log(message);
const messageDiv = `
<div class="msg-block">
  <p>${fullName}: ${message}</p>
</div>
`;

// Boolean
const isNumber = true;
const isString = false;


// null & undefined
// null: 개발자가 의도적으로 비웠다.
// undefined: 어쩌다보니 데이터가 할당되지 않았다.
let answer = null;
console.log(answer);

let answerNotDefined;
console.log(answerNotDefined);

// typeof
console.log(typeof null);
console.log(typeof undefined);
// 구현 오류


// 형변환
console.log(Number("1") + 2);
console.log(Number("a") + 1);
console.log(String(12341) + "a");
console.log(Boolean(0));
console.log(Boolean(10));
console.log(Boolean(-10));


// JS에는 class가 없다.
// prototype based object
// 모든것은 Object
// Object에 속성을 추가하는 방식으로 동장
// Key: Value Pair의 집합
const person = {
  firstName: "Jeeho",
  lastName: "Park",
  "phone number": "010-1234-5678",
  age: 40,
};
console.log(person);
console.log(person.firstName);
console.log(person["lastName"]);
console.log(person["phone number"]);
console.log(Object.keys(person));

// Object를 만들 때,
// 변수를 직접 넣어주면
// 변수 이름이 Key, 값이 Value
const username = "alex";
const shorthandObj = { 
  username,
};
console.log(shorthandObj);
console.log(shorthandObj.username);


// Array
const menus = ["pizza", "chicken", "burger", "beer"];
const temps = [36.5, 36.8, 37.1, 37];
console.log(menus[0]);
console.log(menus[1]);
console.log(menus);
// length 속성을 사용할 수 있으며,
console.log(menus[menus.length - 2]);
// 0으로 만들경우 데이터가 사라진다.
menus.length = 0;
console.log(menus);
