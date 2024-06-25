// [ 4-0 Login ]

const loginForm = document.getElementById("login-form");
/**
 *                document.querySelector("#login-form");
 * 위 두 코드는 같은 뜻,
 * 
 * querySelector()
 *  ㄴ 대상이 id인지 명확히 작성 -> #login-form
 *  ㄴ className, tagName 둘 다 검색이 가능함
 * 
 * getElementById()
 *  ㄴ id를 찾고 있다는 걸 명확히 알기 때문에 -> login-form 만 적어도 됨
 * 
 *  ** loginForm은 HTML element !
 *      ㄴ HTML element 안에 있는 내용을 바로 검색 가능함
 */

// document에서 찾는 대신에 위에 작성한 loginForm에서 검색하는 것
// ㄴ id 값이 login-form인 div 태그로 input과 button이 같이 묶여있기 때문임
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");

/**
 * const loginForm = document.getElementById("login-form");
 * const loginInput = loginForm.querySelector("input");
 * const loginButton = loginForm.querySelector("button");
 * 
 * 위 3줄의 코드는 아래에 작성 된 2줄의 코드와 같다
 * 
 * const loginInput = document.querySelector("login-form input");
 * const loginButton = document.querySelector("login-form button");
*/

function onLoginBtnClick() {
  console.dir(loginInput.value);
  // console.log("click");

  /**
   * console.log()
   *  ㄴ 콘솔 출력용 함수
   * 
   * console.dir()
   *  ㄴ 객체 속성 콘솔 출력용 함수
   *  ㄴ 객체를 속성 뿐 아니라 DOM을 활용해 HTML의 상세 속성까지 확인 가능
   */
}

loginButton.addEventListener("click", onLoginBtnClick);





// [ 4-1 Form Submission ]

// input의 username 유효성 검사
// 1. username이 비어있으면 안됨
// 2. 너무 긴 username 이여도 안됨
// 3. form 안에 input 태그가 있어야 함


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


// ★★★★★
// 반드시! form > input 이 들어가야 함
// [ input > button ] or [ input type = submit ]인 화면의 버튼을
//   마우스 클릭 / 키보드 엔터 입력을 하면 ?
// <form> 태그는 자동으로 submit(전송)이 된다
// html 요소에 submit을 넣었기 때문에 더 이상 addEventListener는 필요없음

// 위에 적은 것 처럼, 마우스 클릭 / 엔터 입력을 하면 login 정보가 자동 제출됨
// click 필요 없고 form을 submit 하는 것이 중요함 !

// 근데 우리는 ?
// 브라우저가 새로고침을 하지 않고 username의 정보를 저장하고 싶음
// 하지만 form이 submit 될 때 마다 새로고침이 되어 저장이 안됨
// 이 문제를 해결해야 함!





// [ 4-2 Events ]

// - button의 클릭 여부가 아닌 form의 submit에 초점 맞춰야함
// - submit이라는 event가 발생하는 것을 아예 막거나,
//   중간에 개입해서 submit event가 발생했다는 것을 알려주길 원함


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