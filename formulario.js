const form = document.querySelector("#info")
const nombre = document.querySelector("#nombre")
const nombreHelp = document.querySelector("#nombreHelp")
const email = document.querySelector("#email")
const emailHelp = document.querySelector("#emailHelp")
const message = document.querySelector("#menssage")
const messageHelp = document.querySelector("#messageHelp")

form.addEventListener("submit", (event) => {
	event.preventDefault()
	if (nombre.value === "" || email.value === "" || message.value === "") {
		if (nombre.value === "") {
			nombreHelp.innerText = "Ingresa nombre y apellido"
		}
		if (email.value === "") {
			emailHelp.innerText = "Ingresa email"
		}
		if (message.value === "") {
			messageHelp.innerText = "¡Dejanos tu mensaje!"
		}
	} else {
      form.submit(); 
	} 	

})