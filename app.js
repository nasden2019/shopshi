const chk = document.getElementById("chk");
const text = document.querySelector(".turnOff");

chk.addEventListener("click", () => {
  // document.body.style.background = 'black';
  document.body.classList.toggle("dark");
  // document.body.classList.toggle("white");
});

// to change Text:
chk.addEventListener("click", changeText);

function changeText() {
  if (text.innerHTML == "Turn On the Day") {
    text.innerHTML = "Turn it off!";
  } else {
    text.innerHTML = "Turn On the Day";
  }
}