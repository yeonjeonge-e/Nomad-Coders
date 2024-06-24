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