function calculate_total(subtotal, tax, tip) {
    let taxQ = subtotal * (tax/100);
    let tipQ = subtotal * (tip/100);
    return Math.round((subtotal + taxQ + tipQ) * 100) / 100;
    }