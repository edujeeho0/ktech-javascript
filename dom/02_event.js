// 숫자를 설정한다.
let count = 0;
// 숫자를 담아둔 요소를 선택해둔다.
const countHolder = document.getElementById("count-holder");

// input 요소에 담긴 숫자를 저장할 변수를 만든다.
let step = 1;
// input 요소를 찾는다.
const stepInput = document.getElementById("step-input");
stepInput.addEventListener("change", (e) => {
  // e에는 Event에 대한(누가, 어떤 등) 정보가 담긴다.
  console.log(e.target);
  step = Number(e.target.value);
  console.log(step);
});

// '+' 버튼을 찾는다.
const plusButton = document.getElementById("button-plus");
// '+' 버튼을 눌렀을 때 실행할 코드를
// addEventListener로 등록해준다.
plusButton.addEventListener("click", function(e) {
  console.log("+ clicked");
  // count를 증가시킨다.
  count += step;
  // countHolder의 innerText를 갱신해준다.
  countHolder.innerText = count;
});

// '-' 버튼도 동일하게 진행한다.
const minusButton = document.getElementById("button-minus");
minusButton.addEventListener("click", (e) => {
  console.log("- clicked");
  count -= step;
  countHolder.innerText = count;
});


const nameInput = document.getElementById("name-input");
const emailInput = document.getElementById("email-input");

const studentForm = document.getElementById("student-form");
// form 요소는 데이터를 보낼 때 submit 이벤트를 발생시킨다.
studentForm.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("submit event fired");

  // container에 새로운 container-item을 추가한다.
  const container = document.getElementById("container");
  const student = document.createElement("div");
  student.className = "container-item";
  
  const nameH3 = document.createElement("h3");
  nameH3.innerText = nameInput.value;
  
  const emailP = document.createElement("p");
  emailP.innerText = emailInput.value;
  
  student.appendChild(nameH3);
  student.appendChild(emailP);
  container.appendChild(student);

  // input을 정리한다.
  nameInput.value = "";
  emailInput.value = "";
});
