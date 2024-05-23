const hour = document.querySelector(".hour") as HTMLElement;
const min = document.querySelector(".min") as HTMLElement;
const sec = document.querySelector(".sec") as HTMLElement;

function getTime() {
  const time = new Date();

  const getHourRot = (360 / 12) * time.getHours() ;
  const getMinRot = (360 / 60) * time.getMinutes();
  const getSecRot = (360 / 60) * time.getSeconds();

  hour.style.transform = `rotate(${getHourRot}deg)`;
  min.style.transform = `rotate(${getMinRot}deg)`;
  sec.style.transform = `rotate(${getSecRot}deg)`;
}

setInterval(() => {
  getTime();
}, 1000);

getTime();
