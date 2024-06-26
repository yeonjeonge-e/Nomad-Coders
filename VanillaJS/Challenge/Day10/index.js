const clockTitle = document.querySelector(".js-clock");

function clock() {
  const christmas = new Date("2024-12-25");
  const today = new Date();
  const dday = christmas - today;

  const day = Math.floor(dday / (1000 * 60 * 60 * 24));
  const hour = Math.floor((dday / (1000 * 60 * 60)) % 24);
  const minute = Math.floor((dday / (1000 * 60)) % 60);
  const second = Math.floor((dday / 1000) % 60);

  clockTitle.innerText = `${day}d ${hour}h ${minute}m ${second}s`;
}

setInterval(clock, 1000);
