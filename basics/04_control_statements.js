// if, else if, else
const someNumber = 11.1;
if (someNumber % 2 === 0) {
  console.log(`${someNumber} is even`);
}
else if (someNumber % 2 === 1) {
  console.log(`${someNumber} is odd`);
}
else {
  console.log(`${someNumber} is decimal`);
}



const dust = 100;

// 0 ~ 30 - 30 ~ 45 - 45 ~ 70 - 70 ~
if (dust < 30) {
  console.log("Good");
}
else if (30 <= dust && dust < 45) {
  console.log("Normal");
}
else if (45 <= dust && dust < 70) {
  console.log("Bad");
}
else {
  console.log("Stay home");
}
// switch도 똑같다.


// while
let i = 0;
while (i < 5) {
  console.log(i);
  i += 1;
}

let loans = 1000;
const monthly = 50;
while (loans > 0) {
  loans -= monthly;
  if (loans < 0) loans = 0;
  console.log(`loans left: ${loans}`);
}

// for - i loop
let result = "";
// for (초기문; 조건문; 증감문)
for (let i = 0; i < 5; i++) {
  result += `${i} `;
}
console.log(result);

// *
// **
// ***
// ****
for (let i = 0; i < 4; i++) {
  let row = "";
  for (let j = 0; j < i + 1; j++) {
    row += "*";
  }
  console.log(row);
}


// for ... in
const person = {
  firstName: "Jeeho",
  lastName: "Park",
};
// 객체의 key를 하나씩 꺼내온다.
for (const key in person) {
  // console.log(key);
  console.log(`${key}: ${person[key]}`);
  // 아래는 잘못된 형식
  console.log(person.key);
}


// for ... of
const menus = ["pizza", "chicken", "burger", "fries"];
// 배열의 데이터를 하나씩 가져온다.
for (const menu of menus) {
  console.log(menu);
}

// 배열을 for ... in로 사용하면?
for (const menu in menus) {
  console.log(menu);
}

// 객체를 for ... of로 사용하면?
/*
// TypeError
for (const item of person) {
  console.log(item);
}
*/


// 반복문 제어
// break, continue
i = 0;
while (i < 10) {
  i += 1;
  if (i % 2 === 0) continue;
  if (i === 7) break;
  console.log(i);
}
