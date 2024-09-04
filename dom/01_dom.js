// (window.)document를 이용하면 
// HTML 문서에 접근할 수 있다.
console.log(document);

// getElementById(elementId);
// id 속성이 elementId인 요소를 선택한다.
const container = document.getElementById("container");
console.log(container);

// 각 요소의 children 속성애는
// content에 포함된 자식 요소들이 담겨 있다.
console.log(container.children);

// 요소의 style 속성을 이용해 CSS 조작이 가능하다.
container.style.padding = "1rem";
container.style.backgroundColor = "aliceblue";

// class도 적용 가능하며, 적용되는 CSS도 변경된다.
container.className = "container-item";


// querySelector(selector);
// CSS Selector를 바탕으로 하나의 요소를 선택한다.
const selectedElem = document.querySelector("#container");
const header = document.querySelector("header");
header.style.textAlign = "center";


// querySelectorAll(selector);
// CSS Selector를 바탕으로 만족하는 모든 요소를 선택한다.
const items = document.querySelectorAll(".container-item");
for (const item of items) {
  item.style.textAlign = "end";
  // querySelector는 요소에서 호출이 가능하며,
  // 자식 요소들을 기준으로 selector와 일치하는 요소를 선택한다.
  item.querySelector("h3").innerText = "Hi";
}
items.forEach((e) => e.style.textAlign = "center");



// 요소를 선택했으면 그 안의 innerText 속성을 수정할 수 있다.
// header.innerText = "Hello World!!!";
const h1 = document.querySelector("h1");
// 태그를 넣어도 HTML 요소가 되지는 않는다.
h1.innerText = "<a>Student List</a>";

// innerHTML은 HTML 요소를 직접 작성해줄 수 있다.
h1.innerHTML = `
  <a href="https://google.com">Google</a>
`;
// 다만 악성 사용자가 데이터를 조작할 경우 코드를 추가로 삽입이 가능하다.
// XSS 공격



