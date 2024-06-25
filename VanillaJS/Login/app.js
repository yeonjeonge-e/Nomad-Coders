const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
// HIDDEN_CLASSNAME 라고 설정한 이유?
// - loginForm / loginInput 처럼 중요한 정보를 담은 것이 아니라 단순 대문자로 작성

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  // greeting.innerHTML = "Hello " + username;
  greeting.innerHTML = `Hello ${username}`;
  // `` : 작은 따옴표('')가 아닌 백틱(``) 표시
  greeting.classList.remove(HIDDEN_CLASSNAME);
  // console.log(username);

  // 코드 설명
  // - input에 값을 넣은 것을 username이라는 상수로 저장하고
  // - loginForm에 classList.add("hidden") 을 입력해주면
  //    form에 이름을 입력하고 login 버튼을 눌러주면 ? -> form이 사라짐

  // ★ classList 메소드 ★
  // add(String)
  // - 지정한 클래스 값을 추가
  // - 만약 추가하려는 클래스가 이미 존재한다면 무시

  // remove(String)
  // - 지정한 클래스 값을 제거
  // - 존재하지 않는 클래스라면 ? 에러 발생 안함

  // contains(String)
  // - 지정한 클래스 값이 존재하는 지 확인
  // - true / false 값만 반환

  // replace(old, new)
  // - old class를 new class로 대체

  // item(Number)
  // - 인덱스 값을 활용하여 클래스 값 반환
}

loginForm.addEventListener("submit", onLoginSubmit);

// 여기까지 코드의 문제점
// - 우리가 유저를 기억하지 못함
// - 새로고침 할 때마다 새로 로그인을 해야함
// - 새로고침 할 때도 form을 볼 필요 없이 이름이 저장되게 하고 싶음