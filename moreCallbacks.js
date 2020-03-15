function orderSupplies(item, callback) {
    let warehouse; //undefined
    const deliveryTime = 1000;
    setTimeout(() => {
      warehouse = {
        paint: {
          product: 'Neon Green Paint',
          directions: () => 'mix it!'
        },
        brush: {
          product: 'Horsehair brush',
          directions: () => 'start painting!'
        },
        tarp: {
            product: "White Tarp",
            directions: () => "lay out the tarp!"
        }
      };
      callback(warehouse[item]);
    }, deliveryTime);
  }
  function receivedItem(item) {
    console.log(`Received ${item.product}, time to ${item.directions()}`);
  }
  orderSupplies('brush', receivedItem);
  orderSupplies('paint', receivedItem);
  orderSupplies('tarp', receivedItem);
  