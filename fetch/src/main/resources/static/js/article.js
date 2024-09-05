// JWT를 회수한다.
const jwt = localStorage.getItem("jwt");
// JwT가 없을 경우
if (!jwt) {
  // 로그인 페이지로 이동한다.
  location.href = "/views/login";
}

// 경로에서 Article ID를 찾는다.
const pathSplit = location.pathname.split("/");
const articleId = pathSplit[pathSplit.length - 1];

// 요청을 보낼 때 JWT를 헤더에 포함해서 보낸다.
fetch(`/articles/${articleId}`, {
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
    console.log(json);
  })
  .catch(e => {
    console.error(e);
  });
  