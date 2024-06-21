const body = document.querySelector("body");
const colors = ["gold", "violet", "darkturquoise"];

function handleWindowSize() {
  const size = window.innerWidth;

  //   뷰포트의 너비를 기록합니다.
  //   window.innerWidth

  if (size >= 700) {
    body.style.backgroundColor = colors[0];
  } else if (size < 700 && size > 400) {
    body.style.backgroundColor = colors[1];
  } else {
    body.style.backgroundColor = colors[2];
  }
}

window.addEventListener("resize", handleWindowSize);
