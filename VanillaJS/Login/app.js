const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  // greeting.innerHTML = "Hello " + username;
  localStorage.setItem("username", username);
  // 애플리케이션에서 내가 입력한 username이 키와 값에 저장됨
  greeting.innerHTML = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

loginForm.addEventListener("submit", onLoginSubmit);

// 여기까지 코드의 문제점
// - 새로고침을 하면 여전히 form이 표시됨
// 개선점) local storage에 username이 존재하는지 확인 후 form 표시하지 않고 바로 h1 요소 표시
//         만약 local storage에 username이 없다면, form이 먼저 표시되도록 하기