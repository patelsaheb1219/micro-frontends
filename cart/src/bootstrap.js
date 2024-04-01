import faker from "faker";

const mount = (el) => {
  const cartItemsCount = `<div>You have ${faker.random.number()} items in your cart</dev>`;

  el.innerHTML = cartItemsCount;
};

if (process.env.NODE_ENV === "development") {
  const el = document.querySelector("#dev-cart");

  if (el) {
    mount(el);
  }
}

export { mount };