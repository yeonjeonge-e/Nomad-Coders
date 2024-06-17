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

/*Ex 3)*/
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
