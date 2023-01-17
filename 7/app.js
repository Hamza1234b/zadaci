const inputUsername = document.querySelector(".input-username")
const inputUsernameButton = document.querySelector(".input-button")
const inputPassword = document.querySelector(".input-password")
const togglePasswordVisibility = document.querySelector(".show-password")

inputUsernameButton.addEventListener("click", function (e) {
  e.preventDefault()
  console.log(inputUsername.value)
})

togglePasswordVisibility.addEventListener("click", function (e) {
  e.preventDefault()
  if (inputPassword.type == "text") inputPassword.type = "password"
  else inputPassword.type = "text"
})
