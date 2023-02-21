const yourName = prompt("Come ti chiami?");
const yourSurname = prompt("Qual'è il tuo cognome ?");
const yourFavColor = prompt("Qual'è il tuo colore preferito?");

const passwordSicurissima = yourName + yourSurname + yourFavColor + "23";

document.getElementById("password_sicurissima").innerHTML = "la tua passaword sicurissima è " + passwordSicurissima ;