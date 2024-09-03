// 할당 연산자
let assign = 0;
// 사칙 연산
console.log(1 + 2);
console.log(3 - 1);
console.log(4 * 3);
console.log(5 / 2);
console.log(Math.floor(5 / 2));
console.log(1483281 % 100);

// 복합할당연산자
assign += 10;
assign -= 3;
assign *= 10;
assign /= 5;
console.log(assign);   // 14
console.log(assign++); // 14 -> 15
console.log(assign--); // 15 -> 14
console.log(++assign); // 15 -> 15
console.log(--assign); // 14 -> 14
console.log(assign);   // 14

// 비교 연산자
console.log(3 > 2);
console.log(3 >= 2);
console.log(5 <= 3);
console.log(7 < 10);
// 문자열 비교시 사전식 비교
console.log("alex" > "brad");
console.log("alex" < "adam");
console.log("alex" < "alexa");
console.log("나" > "가");

// ==
// 동등 연산자 (잘 안씀)
// 값만 비교
const a = 1;
const b = '1';
console.log(a == b);
console.log(a == true);
console.log(0.1 + 0.2 != 0.3);
console.log(91 - "1" == 90);
console.log(true + true == 2);
console.log([] == 0);

console.log(8 * null);
console.log("5" - 1);
console.log("three" * 3);

// 일치 연산자
// 타입과 값을 동시에 비교
console.log(a === b);
console.log(a !== b);
console.log(a !== Number(b));


// 논리 연산자
// and, or, not
console.log(true && false);
console.log(true && true);
console.log(false || true);
console.log(false || false);
console.log(!false);

// 삼항 연산자
console.log(true ? 1 : 2);
console.log(false ? 1 : 2);
const result = Math.PI > 4 ? "is bigger" : "is smaller";
console.log(result);
