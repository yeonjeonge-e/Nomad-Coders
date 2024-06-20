// js 파일은 위에서 아래로 읽음

// [2-5]
// let과 const 차이점 - const는 상수(값변경불가능), let은 변수(값변경가능)
// var : 상수 - 오래된 js 강좌나 책에서 많이 사용, 요즘에는 let / const
// 기본적으로는 const 사용, 필요할 때만 let을 사용하되 var는 쓰지 말 것

// 설명이 필요하지 않은 데이터 리스트들은 array로,
// 설명이 필요한 정보가 담긴 데이터 리스트들은 object로!





// [2-7]
// function은 내가 계속 반복해서 사용할 수 있는 코드 조각이다.
// 어떤 코드를 캡슐화 해서 실행을 여러번 할 수 있게 해준다.

// function 선언 :
// function 함수명() {
//    실행코드
// }

// function 실행 : 함수명();
// argument(인수)를 보내야 하는데 인수란 함수를 실행하는 동안 어떤 정보를 함수에게 보낼 수 있는 방법이다.





// [2-8] Function
/*
Ex 1)
function sayHello(nameOfPerson,age) {
  console.log(nameOfPerson, age);
}

sayHello("chl", 20);
sayHello("dus", 7);
sayHello("wjd", 27);
*/

/*
Ex 2)
function calc(a, b) {
  console.log(a + b);
  console.log(a - b);
  console.log(a * b);
  console.log(a % b);
}

calc(5, 3);
*/

/*Ex 3)
const player = {
  name : "Potato",

  // 객체 안에 함수를 정의 할 때는 functionName : function(){}의 형태
  sayHello : function(otherPersonName) {
    // sayHello는 function 과 같다는 뜻
    // 원래는 밖에 작성하는 방식인
    // function sayHello() {} 인 함수를 안에 넣어 작성한 것

    // function sayHello {} 밖에 있는 arguments를 불러오기 위한 방법
    console.log("Hello " + otherPersonName + " good");
    // sayHello라는 player 안의 function을 부를 때 console.log("Hello")를 해줄거임
  },
};

console.log(player.name);
// player 함수안에 있는 name 값을 출력하는 콘솔
// 가장 먼저 출력 된다
player.sayHello("SweetPotato");
// sayHello()는 어떠한 argument도 받지 않고 있음
// sayHello() 값 안에 "SweetPotato" 라는 값을 otherPersonName 으로 넘겨주고,
// sayHello() 안에 있는 console.log()로 otherPersonName 값을 출력해준다
// 두번째로 출력

// 자바스크립트는 위에서 아래로 코드를 읽기 때문
*/




/** 
// [2-10] 
function plus(a, b) {
  console.log(a + b)
}
plus(2, 2);

function minusFive(a) {
  console.log(a - 5)
}
minusFive(10);

// 숙제
const calculator = {
  add: function(a, b) {
    console.log(a + b);
  },
  minus: function(a, b) {
    console.log(a - b);
  },
  multi: function(a, b) {
    console.log(a * b);
  },
  dev: function(a, b) {
    console.log(a / b);
  },
  power: function(a, b) {
    console.log(a ** b);
  },
};

calculator.add(4, 3);
calculator.minus(4, 3);
calculator.multi(4, 3);
calculator.dev(4, 2);
calculator.power(4, 2);
*/





// [2-11]
/** 
// ------------------------------------------------------------
// age                      나이
// calculateKrAge           한국 나이 계산 함수
// ageOfForeigner           외국인 나이
// ageOfForeigner + 2       외국인 나이 + 2를 한 값이 한국 나이
// krAge                    한국 나이
// Foreigner                외국인
// krAge == calculateKrAge
// ------------------------------------------------------------
const age = 27;
function calculateKrAge(ageOfForeigner) {
  // console.log(agrOfForeigner + 2);
  return ageOfForeigner + 2
}

const krAge = calculateKrAge(age);
// calculateKrAge(age) == function의 return 값이 됨
// 상수 krAge는 calculateKrAge의 반환값이 됨
console.log(krAge);
*/


/**
 * age라는 상수를 만들었어 (변하지 않는 값 : 상수)
 * 한국나이를 계산하는 함수를 만들거야
 * 인자에는 외국인 나이를 넣을거야
 *    (argument : 함수 호출 시 함수에 전달되는 값)
 * return 값에는 외국인 나이 + 2 한 값이 출력 될거야
 * 
 *    calculateKrAge 함수에서 나온 retune 값을 age에 넣어줌
 *    [ return ageOfForeigner + 2 ]
 *    상수 값인 age를 calculateKrAge 인자에 넣은 값을
 *    상수 krAge에 넣어서 콘솔로 출력해준 것
 * 
 * 한국나이 라는 상수를 만들어서, 한국나이계산하는 함수의 인자에 age를 넣었어
 * 콘솔로 한국나이 라는 상수를 출력할거야 
 */


/** 
// 위에서 작성한 calculator 함수를 console.log를 사용하지 않고 만들어보기
const calculator = {
  add: function(a, b) {
    return a + b;
  },
  minus: function(a, b) {
    return a - b;
  },
  multi: function(a, b) {
    return a * b;
  },
  dev: function(a, b) {
    return a / b;
  },
  power: function(a, b) {
    return a ** b;
  },
};

const addResult = calculator.add(10, 2);
console.log(addResult);

const minusResult = calculator.minus(addResult, 10);
const multiResult = calculator.multi(10, minusResult);
const devResult = calculator.dev(multiResult, minusResult);
const powerResult = calculator.power(devResult, minusResult);

console.log(minusResult);
console.log(multiResult);
console.log(devResult);
console.log(powerResult);
*/





// [2-13] Conditionals 
/**
 * prompt()
 * - 사용자에게 창을 띄울 수 있도록 해줌
 * - 그러나 사용자가 prompt 창에 값을 넣기 전까지 페이지는 멈춰있다 (JS 코드의 실행을 멈춤)
 * ★ prompt는 현재 잘 사용하지 않는다 ★
 *   - 메세지 창의 디자인이 이쁘지도 않고,
 *   - CSS 적용 시키기 불가능 (버튼 모양도 바꿀 수 없음)\
 *   - 어떤 브라우저는 팝업을 제한하기도 함
 *   - 아주 오래된 방법임
 * 
*/


// 숫자 입력 시 - 숫자 출력
// 문자 입력 시 - NaN 출력

// const age = prompt("How old are you?");
// console.log(age, parseInt(age));
// 위와 아래는 같은 코드지만 아래 코드가 더 직관적
// const age = parseInt(prompt("How old are you?"));
// console.log(age);





// [2-14] Conditionals part Two
/**
  if(condition) {
    // condition === true
  } else {
    // condition === false
  }

const age = prompt("넌 몇살이니 ?");
if(isNaN(age)) {
  console.log("숫자로 입력해줘");
} else {
  console.log("너의 나이를 입력해줘서 고마워");
}
*/





// [2-15] Conditionals part Three
/**
const age = parseInt(prompt("너 몇살이니 ?"));

if(isNaN(age) || age < 0) {
  console.log("양수로 입력해줘");
} else if(age < 18) {
  console.log("넌 너무 어려");
} else if(age >= 18 && age <= 50) {
  console.log("너는 술을 마실 수 있어");
} else if(age > 50 && age <= 80) {
  console.log("너는 운동해");
} else if(age > 80){
  console.log("원하는대로 해");
}
*/





// [2-16]
/** 
const age = parseInt(prompt("너 몇살이니 ?"));

if(isNaN(age) || age < 0) {
  console.log("양수로 입력해");
} else if(age < 18) {
  console.log("너무 어려");
} else if(age >= 18 && age <= 50) {
  console.log("술 마실 수 있어");
} else if(age > 50 && age <= 80) {
  console.log("운동해");
} else if(age === 100) {
  console.log("wow 원하는대로 해");
} else if(age > 80) {
  console.log("너 하고 싶은대로 해");
}
*/





// ----------------------------------------------------------------------





// [3-2]
/**
  js로 html로 호출하는 방법 --- 코드 사용해서 호출
  
  ★ getElementById()
    - 해당 아이디 하나만 불러올 수 있다.
  ★ getElementByClassName()
    - 해당 클래스네임으로 불러올 수 있으며, 동일요소가 있으면 배열 형태로 보여준다.
  ★ getElementsByTagName()
    - 해당 태그네임을 불러올 수 있으며, 동일요소가 있으면 배열 형태로 나타낸다.
  ★ querySelector / querySelectorAll
    - 해당 태그 및 아이디 클래스명에 속한 요소들을 콜링할 수 있으며,\
      중복요소가 많을 시 querySelector 첫번째 요소만, querySelectorAll은 모든 조건들을 보여준다.
    - CSS selector 방식으로 검색 가능
*/




// [3-3]
/**
const title = document.querySelector("div.hello:first-child h1");
// 첫번째 title에만 동작함

function handleTitleClick() {
  // [1] 첫번째 title 클릭 시 누적 클릭 수 생김
  // console.log("title was clicked");

  // [2] 첫번째 title 클릭 시 색상 바뀜
  // title.style.color = "red";

  // [3] 첫번째 title 클릭 시 색상이 랜덤하게 바뀜
  const randomColor = ["red", "orange", "yellow", "green", "blue"];
  let num = Math.floor(Math.random() * randomColor.length);
  title.style.color = randomColor[num];
  // 설명)  Math.floor() : 소수점 이하 버리기
  //        Math.random() : 0-1 사이의 숫자를 랜덤으로 뽑아줌
  //        randomColor.length : 배열 안에 있는 요소의 길이 알려줌
  //        (Math.random() * randomColor.length) : 0.xxx * 5 = 5.xxx 인데,
  //                                               floor()로 인해 소수점 이하는 버려져서 정수만 남음
  //        위의 값에서 나온 정수 값이 배열로 들어가게 되면서,
  //        title.style.color의 색상이 랜덤하게 나오게 되는 것
}

title.addEventListener("click", handleTitleClick);
*/





// [3-4]
/**
const title = document.querySelector("div.hello:first-child h1");
// 첫번째 title에만 동작함 (아래 3개의 코드는 다 같은 첫번째 title을 가리킨다)
// 1) "div.hello:first-child h1"
// 2) "div.hello h1"
// 3) "h1"

function handleTitleClick() {
  title.style.color = "red";
}

function handleMouseEnter() {
  // console.log("mouse is here");
  title.innerText = "Mouse is here";
}

function handleMouseLeave() {
  // console.log("Mouse is gon");
  title.innerText = "Mouse is gone";
}

title.addEventListener("click", handleTitleClick);
title.addEventListener("mouseenter", handleMouseEnter);
title.addEventListener("mouseleave", handleMouseLeave);
*/





// [3-5]
const h1 = document.querySelector("h1");

function handleTitleClick() {
  h1.style.color = "blue";
}

function handleMouseEnter() {
  h1.innerText = "Mouse is here";
}

function handleMouseLeave() {
  h1.innerText = "Mouse is gone";
}

function handleWindowResize() {
  document.body.style.backgroundColor = "tomato";
}

function handleWindowCopy() {
  alert("copier");
}

function handleWindowOffline() {
  alert("SOS no WIFI");
}

function handleWindowOnline() {
  alert("So Good WIFI");
}

// h1.onclick =  handleTitleClick;
// h1.onmouseenter = handleMouseEnter;
h1.addEventListener("click", handleTitleClick);
h1.addEventListener("mouseenter", handleMouseEnter);
h1.addEventListener("mouseleave", handleMouseLeave);

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("offline", handleWindowOnline);