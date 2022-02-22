const priceKm = 0.21;
const youngDiscount = 20;
const oldDiscount = 40;

let userName = prompt('Come ti chiami?');
let userAge = prompt('Quanti anni hai?');
let ticketDistance = prompt('Quanti km devi percorrere?');

userAge = parseFloat(userAge);
ticketDistance = parseInt(ticketDistance);
let discount = 0;

if (isNaN(userAge) || isNaN(ticketDistance)) {
    alert('Valore errato, si prega di inserire un numero.');
    document.getElementById('price').innerHTML = 'Errore nell\'inserimento dei dati';
} else if (userAge < 18) {
        discount = youngDiscount;
        let ticketPrice = (priceKm * ticketDistance * (1 - (discount / 100))).toFixed(2);
        } else if (userAge >= 65) {
            discount = oldDiscount;
            let ticketPrice = (priceKm * ticketDistance * (1 - (discount / 100))).toFixed(2);
                }


document.getElementById('user-name').innerHTML = userName;
document.getElementById('ticket-price').innerHTML = ticketPrice;
document.getElementById('age').innerHTML = userAge;
document.getElementById('distance').innerHTML = ticketDistance;
document.getElementById('discount').innerHTML = discount;