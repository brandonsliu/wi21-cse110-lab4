function discountPrices(prices, discount) {
    let discounted = [];
    let finalPrice = 0;

    for(let i = 0; i < prices.length; i++){
        let discountedPrice = prices[i] * (1-discount);
        finalPrice = Math.round(discountedPRice * 100) / 100;
        discounted.push(finalPrice);
    }
    console.log(i);
    console.log(discountedPrice);
    console.log(finalPrice);
    return discounted;
}