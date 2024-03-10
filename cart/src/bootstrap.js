import faker from "faker";

const cartItemsCount = `<div>You have ${faker.random.number()} items in your cart</dev>`;

document.querySelector("#dev-cart").innerHTML = cartItemsCount;