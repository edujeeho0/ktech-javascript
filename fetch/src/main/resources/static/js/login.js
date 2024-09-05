// 현재 JWT가 저장되어 있는지 확인해보기
console.log(localStorage.getItem("jwt"));

// form 요소에 사용자가 아이디 비밀번호를 입력하고 제출
// 해당 데이터를 모아서 JSON으로 변환
// JSON 데이터를 서버로 전송
// 응답으로 돌아온 JWT를 브라우저에 저장한다.
// 1. form과 input 요소들을 가져온다.
const loginForm = document.getElementById("login-form");
const usernameInput = document.getElementById("username-input");
const passwordInput = document.getElementById("password-input");

// 2. form에 eventListener를 추가해준다.
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  // 1. 보낼 데이터를 정리해둔다.
  const username = usernameInput.value;
  const password = passwordInput.value;
  // 2. fetch 요청을 보낸다.
  fetch("/token/issue", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ 
      username, 
      password,
    }),
  })
  // 3. 응답이 도착하면 처리한다.
  .then(response => {
    // 3-1. 만약 성공했다면, JSON으로 해석한다.
    if (response.ok) {
      return response.json();
    }
    // 3-2. 만약 실패했다면, 예외를 던진다.
    else throw Error(response.status);
  })
  // 4. 응답에 담긴 JWT를 저장한다.
  .then(json => {
    console.log(json);
    console.log(json.token);
    localStorage.setItem("jwt", json.token);
  })
  // 실패했을 경우 이유를 alert로 표시한다.
  .catch(e => alert(e.message));
});
