let userName = prompt('Come ti chiami?');
let userAge = prompt('Quanti anni hai?');
let ticketDistance = prompt('Quanti km devi percorrere?');

document.getElementById('user-name').innerHTML = userName;

let ticketPrice = (ticketDistance * 0.21).toFixed(2);

if (userAge < 18) {
    ticketPrice = (ticketPrice * 0.8).toFixed(2);
} else if (userAge > 65) {
    ticketPrice = (ticketPrice * 0.6).toFixed(2);
} else {}

document.getElementById('ticket-price').innerHTML = ticketPrice;