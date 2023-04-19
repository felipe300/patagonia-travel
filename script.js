let trekking = document.getElementById("trekking")
let swimming = document.getElementById("swimming")
let ferry = document.getElementById("ferry")

trekking.addEventListener("click", () => {
	let val = trekking.innerHTML
	let cardTitle = document.getElementById("cardTitle")
	let cardText = document.getElementById("cardText")
	let overlayTitle = document.getElementById("overlayTitle")
	let overlayLocation = document.getElementById("overlayLocation")

	cardTitle.innerHTML = val
	cardText.innerHTML = `"Modalidad de excursionismo que consiste en recorrer a pie largas distancias o zonas determinadas, generalmente de alta montaña y poco frecuentadas por el turismo convencional".\n<a href="#">Conocer más</a>`

	let mainIng = document.getElementById("mainIng")
	mainIng.setAttribute("src", "./img/trekking.jpg")

	overlayTitle.innerHTML = val
	overlayLocation.innerHTML = "Vólcan Villarrica"
})

swimming.addEventListener("click", () => {
	let val = swimming.innerHTML
	let cardTitle = document.getElementById("cardTitle")
	let cardText = document.getElementById("cardText")
	let overlayTitle = document.getElementById("overlayTitle")
	let overlayLocation = document.getElementById("overlayLocation")

	cardTitle.innerHTML = val
	cardText.innerHTML = `"Deporte o ejercicio que consiste en nadar. En las pruebas de natacón se compite en velocidad, en cualquiera de los cuatro estilos: braza, crol, espalda y mariposa".\n<a href="#">Conocer más</a>`

	let mainIng = document.getElementById("mainIng")
	mainIng.setAttribute("src", "./img/lake.jpg")

	overlayTitle.innerHTML = val
	overlayLocation.innerHTML = "Lago Cochrane"
})

ferry.addEventListener("click", () => {
	let val = ferry.innerHTML
	let cardTitle = document.getElementById("cardTitle")
	let cardText = document.getElementById("cardText")

	let overlayTitle = document.getElementById("overlayTitle")
	let overlayLocation = document.getElementById("overlayLocation")

	cardTitle.innerHTML = val
	cardText.innerHTML = `"Embarcación que realiza alternativamente el mismo recorrido entre dos puntos; especialmente la de grandes dimensiones destinadas al transporte de cargas pesadas o pasajeros".\n<a href="#">Conocer más</a>`

	let mainIng = document.getElementById("mainIng")
	mainIng.setAttribute("src", "./img/ferry.jpg")

	overlayTitle.innerHTML = val
	overlayLocation.innerHTML = "Lago Llanquihue"
})
