let userName = prompt('Come ti chiami?');
let userAge = prompt('Quanti anni hai?');
let ticketDistance = prompt('Quanti km devi percorrere?');
let discount = 0

if (userAge < 18) {
    discount = 20;
} else if (userAge > 65) {
    discount = 40;
} else {}

let ticketPrice = (0.21 * ticketDistance * (1 - (discount / 100))).toFixed(2);

document.getElementById('user-name').innerHTML = userName;
document.getElementById('ticket-price').innerHTML = ticketPrice;
document.getElementById('age').innerHTML = userAge;
document.getElementById('distance').innerHTML = ticketDistance;
document.getElementById('discount').innerHTML = discount;