const clock = document.getElementById("clock");

function getClock() {
  const date = new Date();

  // console.log(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
  // clock.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
  // 콘솔창으로 시계 출력 확인 후 clock.innerText로 html 내에서 출력

  const hours = String(date.getHours()).padStart(2, "0")
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

// setInterval(sayHello, 5000);
// setInterval(호출하려는 function의 이름, 호출 사이에 기다리는 시간)
// 5000ms == 5초
// 실행 후 5초 후에 콘솔창에서 Hello 라는 문구가 뜬다

getClock()
setInterval(getClock, 1000);
// 사이트가 load 되자마자 getClock() 함수 실행
// ㄴ new Date()를 입력하면
// ㄴ Thu Jun 27 2024 04:42:30 GMT+0900 (한국 표준시)
//    이런식으로 현재 날짜와 시간에 대한 데이터가 나옴
// ㄴ 우리는 위 데이터에서 시, 분, 초만 가지고 와서 출력한 것

// setInterval을 이용해서 / getClock() 함수를 / 1초마다 매번 발생하게 하는 것
// 매초마다 다시 실행되도록 작성