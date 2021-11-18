function voucherFF (harga){
    codeFF = harga*50/100
    max = harga-50000
    tax = harga+5/1000
    jarak = 3000
    total = 
    if(harga >= 50000){
        return codeFF
    }
    eles if(codeFF > 50000){
        return max
    }
    else {
        return `jajan lagi`
    }
}
console.log(voucherFF(100000));