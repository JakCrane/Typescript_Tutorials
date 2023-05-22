"use strict";
class InvoiceItem {
    constructor(c, d, a) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    // can collapse everything above into the below constructor (this only works with the access modifiers)
    // constructor(
    //     readonly client:string;
    //     private details:string;
    //     public amount: number;
    // ){}
    format() {
        return `${this.client} owes £${this.amount} for ${this.details}`;
    }
}
let InvoiceArr = []; //only objects created using the invoice constructor can be used in the array
const form = document.getElementsByClassName('new-item-form')[0];
const type = document.getElementById('type');
const tofrom = document.getElementById('tofrom');
const details = document.getElementById('details');
const amount = document.getElementById('amount');
form.addEventListener('submit', (e) => {
    e.preventDefault(); //to stop the form refreshing
    InvoiceArr.push(new InvoiceItem(tofrom.value, details.value, amount.valueAsNumber));
});
