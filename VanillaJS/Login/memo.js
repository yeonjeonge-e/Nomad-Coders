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





// [ 4-3 Events part Two ]

// form의 기본 동작
// ㄴ submit

// 링크의 기본 동작
// ㄴ 다른 페이지로 이동

// 엣지 : PointerEvent 
// 크롬 : MouseEvent

// ★★★
// addEventListener 안에 있는 함수는 직접 실행하지 않는다
// 브라우저가 실행시켜주고 브라우저에서 해당 이벤트에 대한 정보
// 즉, object를 가지게 된다.

// 해당 이벤트가 가진 기본 Default값을 발생시키지 않기 하게 위해선
// preventDefault를 이용하여 막을 수 있다


const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

const link = document.querySelector("a");

function onLoginSubmit(event) {
  event.preventDefault();
  console.log(loginInput.value);
}

function handleLinkClick(event) {
  event.preventDefault();
  // preventDefault로 인해 링크를 클릭해도 사이트로 넘어가지 않음
  console.dir(event);
  // alert("clicked");
}

loginForm.addEventListener("submit", onLoginSubmit);
link.addEventListener("click", handleLinkClick);





// [ 4-4 Getting Username ]

// user가 이름을 로그인(제출) 하면 form 을 없애고 싶음
// 방법 1. HTML의 form 요소 자체를 삭제하기
// 방법 2. CSS 이용해서 숨기기

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





// [ 4-5 Saving Username ]

// local storage
// - 우리가 브라우저에 무언가를 저장할 수 있게 해주는 역할

// 개발자도구 - 콘솔창에서
// - localStorage.setItem("username", "yeonjeong") 입력해주고
// 개발자도구 - 애플리케이션 - 로컬 스토리지 - http://~ 클릭
// - http://~ 사이트에 키:username, 값:yeonjeong 값이 DB에 저장됨
// 개발자도구 - 콘솔창에서
// - localStorage.getItem("username"); 입력하면?
// -> "yeonjeong" 출력

// local storage에 저장된 값 삭제
// 개발자도구 - 콘솔창에서
// - localStorage.removeItem("username"); 하고 애플리케이션에서 확인해보면 값이 삭제 됨


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





// [ 4-6 Loading Username ]

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