import config from "./ApiKey.js";
const API_KEY = config.API_KEY;

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  // console.log("You live in", lat, lon);
  // "You live in" 37.1720192 127.1496704

  // lat, lon, api_key 값을 추가한 주소창 코드에 ${} 이용해서 세 변수 삽입해주기
  // ★ (꼭! 백틱 `` 으로 감싸줘야함)
  // https://api.openweathermap.org/data/2.5/weather?lat=37.1720192&lon=127.1496704&appid=API_KEY
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      // console.log(data.name, data.weather[0].main)
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });
  // fetch
  // - 실제 URL에 갈 필요 없이 JS가 대신 URL을 부른 것
  // - fetch는 promise임 --- 당장 무언가 일어나지 않고, 시간이 좀 걸린 뒤에 일어난다
}
function onGeoError() {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
// 브라우저에서 위치 좌표를 줌 (WiFi / GPS / 위치 등등)
// argument 에는 (모든 게 잘됐을 떄 실행하는 함수, 에러가 발생했을 때 실행하는 함수)