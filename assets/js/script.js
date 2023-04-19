let trekking = document.getElementById("trekking")
let swimming = document.getElementById("swimming")
let ferry = document.getElementById("ferry")

const attractions = [{
	name: 'trekking',
	image: './assets/img/trekking.jpg',
	location: 'Volcan Villarrica',
	desc: "Modalidad de excursionismo que consiste en recorrer a pie largas distancias o zonas determinadas, generalmente de alta montaña y poco frecuentadas por el turismo convencional"
},
{
	name: 'natación',
	image: './assets/img/lake.jpg',
	location: 'Lago Cochrane',
	desc: "Deporte o ejercicio que consiste en nadar.En las pruebas de natacón se compite en velocidad, en cualquiera de los cuatro estilos: braza, crol, espalda y mariposa"
},
{
	name: 'ferry',
	image: './assets/img/ferry.jpg',
	location: 'Volcan Villarrica',
	desc: "Embarcación que realiza alternativamente el mismo recorrido entre dos puntos; especialmente la de grandes dimensiones destinadas al transporte de cargas pesadas o pasajeros"
}]

function loadAttractions (item) {
	let attraction = attractions
		.filter((atr) => atr.name === item.toLowerCase())

	let cardTitle = document.getElementById("cardTitle")
	let cardText = document.getElementById("cardText")
	let overlayTitle = document.getElementById("overlayTitle")
	let overlayLocation = document.getElementById("overlayLocation")

	cardTitle.innerHTML = attraction[0].name
	cardText.innerHTML = `"${attraction[0].desc}".\n<a href="#">Conocer más</a>`

	let mainIng = document.getElementById("mainIng")
	mainIng.setAttribute("src", `${attraction[0].image}`)

	overlayTitle.innerHTML = attraction[0].name
	overlayLocation.innerHTML = attraction[0].location
}

trekking.addEventListener("click", () => {
	let val = trekking.innerHTML
	loadAttractions(val)
})

swimming.addEventListener("click", () => {
	let val = swimming.innerHTML
	loadAttractions(val)
})

ferry.addEventListener("click", () => {
	let val = ferry.innerHTML
	loadAttractions(val)
})
