const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

function onLoginBtnClick() {
  const username = loginInput.value;
  // if (username === "") {
  //   alert("이름을 입력해줘");
  // } else if (username.length > 15) {
  //  ★ username.length : username의 string 길의
  //   alert("이름이 너무 길어");
  // }

  // if ~ else if 문은 선호하는 방식이 아니라 다른 방식으로 작성할 것
  console.log(username);
}

loginButton.addEventListener("click", onLoginBtnClick);