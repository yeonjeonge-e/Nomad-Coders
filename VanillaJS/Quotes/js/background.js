const images = ["1.jpg", "2.jpg", "3.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];
// console.log(chosenImage);

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;
// console.log(bgImage);


// 일반 배경화면 삽입 코드 & CSS
// document.body.appendChild(bgImage);
// appendChild : body에 html을 추가


// 반응형 배경화면 삽입 코드
document.body.style.backgroundImage = `url(img/${chosenImage})`;
document.body.style.backgroundPosition = "top";
document.body.style.backgroundRepeat = "no-repeat";
document.body.style.backgroundSize = "cover";
document.body.style.backgroundAttachment = "fixed";