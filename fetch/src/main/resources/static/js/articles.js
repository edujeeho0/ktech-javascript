// JWT를 회수한다.
const jwt = localStorage.getItem("jwt");
// JwT가 없을 경우
if (!jwt) {
  // 로그인 페이지로 이동한다.
  location.href = "/views/login";
}

// article 데이터를 HTML로 변환하는 함수
function addArticle(title, content, writer) {
  const articleDiv = document.createElement("div");
  articleDiv.innerHTML = `
    <h3>${title}</h3>
    <p>${content}</p>
    <p>${writer}</p>
    <hr>
  `;
  document.getElementById("container").appendChild(articleDiv);
}

// 요청을 보낼 때 JWT를 헤더에 포함해서 보낸다.
fetch("/articles", {
  method: "get",
  headers: {
    "Authorization": `Bearer ${jwt}`
  },
})
  .then(response => {
    if (response.ok) {
      return response.json();
    }
    // JWT에 문제가 있어서 인증에 실패했다.
    else if (response.status === 403) {
      localStorage.removeItem("jwt");
      location.href = "/views/login";
    }
    else throw Error("failed to fetch");
  })
  .then(json => {
    json.reverse();
    json.forEach((article) => addArticle(article.title, article.content, article.writer));
  })
  .catch(e => {
    console.error(e);
  });
  