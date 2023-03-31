const prices = [10.99, 5.99, 3.99, 6.59];
const tax = 0.19;
// const taxAdjustedPrices = []; 

// for(const price of prices){
//     taxAdjustedPrices.push(price * ( 1 + tax));
// }

// prices.forEach((price, idx, prices) => {
//     const priceObj = { index: idx, taxAdjustedPrices: price * ( 1 + tax )};
//         taxAdjustedPrices.push(priceObj);
// });

// console.log(taxAdjustedPrices);

const taxAdjustedPrices = prices.map((price, idx, prices) => {
    const priceObj = { index: idx, taxAdjustedPrices: price * ( 1 + tax )};
    return priceObj;
});

console.log(prices, taxAdjustedPrices);

const sortedPrice = prices.sort((a,b) => {
    return a - b;
})

console.log(sortedPrice);

console.log(sortedPrice.reverse());

const over6 = prices.filter( price => price > 6);

console.log(over6);