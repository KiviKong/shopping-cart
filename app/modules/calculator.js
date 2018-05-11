let total;
let item;
let map = new Map();

const calculator = {
    calculateTotalAmount: (items = [], prices = [], promotions = []) => {
        if (items.length === 0 || prices.length === 0) {
            return -1;
        }

        total = 0; map.clear();

        items.forEach((element) => {
            // According to items model, null values are not allowed.
            // If there is a code, there is a price.
            item = prices.find((e) => {
                return e.code === element;
            });

            // But we can receive codes that are not stored in the database.
            if (typeof item !== 'undefined') {
                total += item.price;

                if (map.has(element)) {
                    map.set(element, {count: map.get(element).count + 1, price: item.price});
                } else {
                    map.set(element, {count: 1, price: item.price});
                }
            }
        });

        promotions.forEach((element) => {
            if (map.has(element.code)) {
                total -= promotionsLogic[element.idPromotion](map.get(element.code).count, map.get(element.code).price);
            }
        });

        return total;
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

module.exports = calculator;
