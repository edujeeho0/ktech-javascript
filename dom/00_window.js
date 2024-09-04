// Window
// 브라우저의 기능을 담고있는 객체
// window: 현재 Window를 할당받은 전역 변수
console.log(window);

// 브라우저의 여러 기능을 사용할 수 있다.

// alert: 경고 대화 상자 표시
window.alert("Hello Window!!!");

// confirm: Y/N 선택 대화 상자
const yn = window.confirm("1 + 1 = 2?");
if (yn) {
  console.log("correct!!!");
}
else {
  console.log("too bad...");
}

// prompt: 데이터 입력 대화 상자 표시
const inputName = window.prompt("enter your name:");
window.alert(`Hello, ${inputName}!!!`);

const nextLink = window.prompt("to link: ");
if (nextLink) {
  window.location.href = nextLink;
}

// window를 생략하면 window의 속성들을 사용할 수 있다.
alert();
confirm();
prompt();
console.log(location);
window.console.log("hello!");
