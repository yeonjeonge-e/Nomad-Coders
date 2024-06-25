const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

function onLoginSubmit(event) {
  event.preventDefault();
  // preventDefault() : 함수의 기본값(행동)을 하지 못하게 막는 함수
  //                     ㄴ 기본값? form을 submit 하면 새로고침 되는 현상  
  // const username = loginInput.value;
  // console.log(event);
  console.log(loginInput.value);
  // 내가 입력한 값에 대한 정보가 콘솔에 출력 됨 -- 버튼 클릭해도 새로고침 안됨

  // 위 함수에서 하고 있는 것은 ?
  // 1. onLoginSubmit 이라는 함수를 만들고
  // 2. 이 함수가 event라는 하나의 argument를 받도록 하는 것

  // console.log(event); input에 값을 넣고 입력하면 ?
  // SubmitEvent {isTrusted: true, submitter: input, type: 'submit', target: form#login-form, currentTarget: form#login-form, …}
  // 위와 같은 형식으로 값이 출력되긴 함

  // ★ onLoginSubmit 함수에서 하나의 event 라는 argument를 받고,
  //    그것을 js에 넘겨주는 것
}

loginForm.addEventListener("submit", onLoginSubmit);

// 모든 eventListener function의 첫번째 argument는 항상
// 지금 막 벌어진 일들에 대한 정보가 됨