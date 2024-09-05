// article 데이터를 HTML로 변환하는 함수
function addArticle(title, content, writer) {
  const articleDiv = document.createElement("div");
  articleDiv.innerHTML = `
    <h3>${title}</h3>
    <p>${content}</p>
    <p>${writer}</p>
  `;
  document.getElementById("container").appendChild(articleDiv);
}

// GET /articles

// fetch는 Promise를 돌려준다.
fetch("/articles")
  // then: 비동기 실행이 끝난 다음에
  // callback을 실행한다.
  .then(response => {
    // response는 돌아온 HTTP 응답을 나타낸다.
    console.log(response.status);
    // response를 어떻게 처리할지를 결정할 수 있다.
    if (response.ok) {
      return response.json();  // [{}, {}, {}, ... ]
    }
    else throw Error("failed to fetch");
  })
  // Promise<Object> ( [{}, {}, {}, ... ] )

  // then() 메서드의 반환 결과는 callback으로 주어진 함수의 결과를
  // Promise로 감싼 형태가 된다.

  // 요청이 성공했으면 `response.json()`이
  // 다시 Promise로 반환된다.
  .then(json => {
    json.reverse();
    json.forEach((article) => addArticle(article.title, article.content, article.writer));
  })
  // Promise 처리중 예외가 발생하면 처리하는 방법을
  // catch로 전달한다.
  .catch(e => {
    console.error(e);
  });
console.log("fetch request sent!!!");


// POST /articles
// 1. 먼저, form을 찾아둔다.
const articleForm = document.getElementById("article-form");
// 데이터를 담는 input들도 찾아둔다.
const titleInput = document.getElementById("title-input");
const contentInput = document.getElementById("content-input");
const writerInput = document.getElementById("writer-input");

// 2. form에 event listener를 추가한다.
articleForm.addEventListener("submit", (e) => {
  // 1. form의 기본 동작을 방지한다.
  e.preventDefault();
  // 2. input에서 데이터를 하나씩 가져온다.
  const title = titleInput.value;
  const content = contentInput.value;
  const writer = writerInput.value;
  console.log(title, content, writer);
  // 3. fetch를 이용해서 데이터를 보내준다.
  // 두번째 인자는 요청에 포함할 옵션들
  fetch("/articles", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title, content, writer }),
  })
  // 응답이 돌아오면 
  .then(response => {
    // 결과를 확인하고
    alert(response.statusText);
    // 페이지를 새로고친다.
    location.reload();

    // // 입력창을 비워준다.
    // titleInput.value = "";
    // contentInput.value = "";
    // writerInput.value = "";
  });

  console.log(JSON.stringify({ title, content, writer }));
});
