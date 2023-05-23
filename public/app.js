import InvoiceItem from './classes/InvoiceItem.js';
import ListTemplate from './classes/ListTemplate.js';
import PaymentItem from './classes/PaymentItem.js';
// let docOne:HasFormatter;
// let docTwo:HasFormatter;
// docOne = new InvoiceItem('yoshi','web work', 250)
// docTwo = new InvoiceItem('mario','plumming work', 200)
// let docs: HasFormatter[] = [];
// docs.push(docOne)
// docs.push(docTwo)
// console.log(docs)
let InvoiceArr = []; //only objects created using the invoice constructor can be used in the array
const form = document.getElementsByClassName('new-item-form')[0];
const type = document.getElementById('type');
const tofrom = document.getElementById('tofrom');
const details = document.getElementById('details');
const amount = document.getElementById('amount');
const ul = document.getElementsByClassName('item-list')[0];
const List = new ListTemplate(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault(); //to stop the form refreshing
    let doc;
    if (type.value == 'invoice') {
        doc = new InvoiceItem(tofrom.value, details.value, amount.valueAsNumber);
        let position = 'start';
    }
    else {
        doc = new PaymentItem(tofrom.value, details.value, amount.valueAsNumber);
        let position = 'end';
    }
    List.render(doc, type.value, 'end');
});
