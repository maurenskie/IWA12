const { JSDOM } = require('jsdom');

const STATUS_MAP = {
  shelf: {
    color: 'green',
    canReserve: true,
    canCheckout: true,
    canCheckIn: false,
  },
  reserved: {
    color: 'blue',
    canReserve: false,
    canCheckout: true,
    canCheckIn: false,
  },
  overdue: {
    color: 'red',
    canReserve: false,
    canCheckout: false,
    canCheckIn: true,
  },
  checkedOut: {
    color: 'orange',
    canReserve: false,
    canCheckout: false,
    canCheckIn: true,
  }
};

const html = '<html><body>' +
             '<div id="status">Status</div>' +
             '<button id="reserve">Reserve</button>' +
             '<button id="checkout">Checkout</button>' +
             '<button id="checkin">Checkin</button>' +
             '</body></html>';

const dom = new JSDOM(html);
global.window = dom.window;
global.document = dom.window.document;

const status = document.getElementById('status');
const reserve = document.getElementById('reserve');
const checkout = document.getElementById('checkout');
const checkin = document.getElementById('checkin');

status.style.color = STATUS_MAP.shelf.color;
reserve.disabled = !STATUS_MAP.shelf.canReserve;
checkout.disabled = !STATUS_MAP.shelf.canCheckout;
checkin.disabled = !STATUS_MAP.shelf.canCheckIn;

console.log(`Status color: ${status.style.color}`);
console.log(`Reserve button enabled: ${!reserve.disabled}`);
console.log(`Checkout button enabled: ${!checkout.disabled}`);
console.log(`Checkin button enabled: ${!checkin.disabled}`);
