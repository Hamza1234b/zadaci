const redLight = document.getElementById("red")
const yellowLight = document.getElementById("yellow")
const greenLight = document.getElementById("green")

document.addEventListener("click", function (e) {
  if (
    e.target.matches(".outside-box") ||
    e.target.matches(".light-box") ||
    e.target.matches(".light")
  ) {
    if (redLight.style.background == "red") {
      yellowLight.style.background = "yellow"
      redLight.style.background = "black"
    } else if (yellowLight.style.background == "yellow") {
      greenLight.style.background = "green"
      yellowLight.style.background = "black"
    } else if (greenLight.style.background == "green") {
      redLight.style.background = "red"
      greenLight.style.background = "black"
    } else redLight.style.background = "red"
  }
})
