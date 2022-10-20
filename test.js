function dP(pr, di) {
    const dis = [];
    const le = pr.length;

    for(let i = 0; i < le; i++){
        const discountedPrice = pr[i] * (1 - di);
        dis.push(discountedPrice);
    }
    return dis;
}

console.log(dP([100, 200, 300], 0.5));