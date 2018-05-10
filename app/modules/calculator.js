let total;
let itemPrice;
let map = new Map();

const amount = {
    calculateTotalAmount: (items, prices, promotions) => {
        total = 0;
        itemPrice = 0;
        map.clear();

        items.forEach((element) => {
            itemPrice = prices.find((e) => {
                return e.code === element;
            }).price;

            total += itemPrice;

            if (map.has(element)) {
                map.set(element, {count: map.get(element).count + 1, price: itemPrice});
            } else {
                map.set(element, {count: 1, price: itemPrice});
            }
        });

        promotions.forEach((element) => {
            total -= promotionsLogic[element.idPromotion](map.get(element.code).count, map.get(element.code).price);
        });
        console.log(total);
    },
};

const promotionsLogic = {
    '2-for-1': (itemsCount, price) => {
        return Math.trunc(itemsCount / 2) * price;
    },
    'bulk': (itemsCount, price) => {
        return itemsCount >= 3 ?(price * 0.05) * itemsCount : 0;
    },
};

// amount.calculateTotalAmount(
//     ['PANTS', 'TSHIRT', 'HAT'],
//     [{code: 'PANTS', price: 5},
//     {code: 'TSHIRT', price: 20},
//     {code: 'HAT', price: 7.5}],
//     [{code: 'PANTS', idPromotion: '2-for-1'},
//     {code: 'TSHIRT', idPromotion: 'bulk'}]);

// amount.calculateTotalAmount(
//     ['PANTS', 'TSHIRT', 'PANTS'],
//     [{code: 'PANTS', price: 5},
//     {code: 'TSHIRT', price: 20},
//     {code: 'HAT', price: 7.5}],
//     [{code: 'PANTS', idPromotion: '2-for-1'},
//     {code: 'TSHIRT', idPromotion: 'bulk'}]);

// amount.calculateTotalAmount(
//     ['TSHIRT', 'TSHIRT', 'TSHIRT', 'PANTS', 'TSHIRT'],
//     [{code: 'PANTS', price: 5},
//     {code: 'TSHIRT', price: 20},
//     {code: 'HAT', price: 7.5}],
//     [{code: 'PANTS', idPromotion: '2-for-1'},
//     {code: 'TSHIRT', idPromotion: 'bulk'}]);

// amount.calculateTotalAmount(
//     ['PANTS', 'TSHIRT', 'PANTS', 'PANTS', 'HAT', 'TSHIRT', 'TSHIRT'],
//     [{code: 'PANTS', price: 5},
//     {code: 'TSHIRT', price: 20},
//     {code: 'HAT', price: 7.5}],
//     [{code: 'PANTS', idPromotion: '2-for-1'},
//     {code: 'TSHIRT', idPromotion: 'bulk'}]);

module.exports = amount;
