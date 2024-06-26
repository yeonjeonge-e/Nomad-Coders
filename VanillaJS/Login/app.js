const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  // greeting.innerHTML = `Hello ${username}`;
  // greeting.classList.remove(HIDDEN_CLASSNAME);
  paintGreeting(username);
}

function paintGreeting(username) {
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

const saveUserName= localStorage.getItem(USERNAME_KEY);
// console.log(saveUserName);
// ★ local storage에 유저정보가 없으면 null이 출력됨 ★

if(saveUserName === null) {
  // show the form
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  // saveUserName === null 이면, form 태그에 있는 hidden class 명을 지워줄것임
  // ㄴ 왜냐? 현재는 form, h1 모두 hidden class를 가지고 시작하기 때문
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  // show the greeting
  // if문만 실행을 하면 form 태그 안에 username을 입력 시
  //  localStorage에 저장이 되고 새로고침을 하면 form 태그가 안보이게 됨 -- else문이 없기 때문

  // greeting.innerText = `Hello ${saveUserName}`;
  // greeting.classList.remove(HIDDEN_CLASSNAME);
  // 위 코드 두줄 설명
  // - greeting 안에 텍스트(innerText)를 추가하고
  // - greeting 한테서 HIDDEN_CLASSNAME을 제거해줌

    paintGreeting(saveUserName);
  // 위의 코드 두줄이 onLoginSubmit()함수와 위 else문에서 반복되고 있어서
  // paintGreeting 함수로 따로 만들어준 것
  // ㄴ 이 함수의 역할은 화면에 텍스트가 출력되게 하는 것
}

// 할 일
// 1. local storage에 유저정보 유무 확인
//    유저정보가 없다면 form을 보여주고 기존 출력되는 방식대로 하면 됨