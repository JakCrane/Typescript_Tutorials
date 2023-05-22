class InvoiceItem {
    public client: string;
    private details: string;
    readonly amount: number;

    constructor(c:string, d:string, a:number){
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
        return `${this.client} owes £${this.amount} for ${this.details}`
    }
}


let InvoiceArr:InvoiceItem[] = []; //only objects created using the invoice constructor can be used in the array
const form = document.getElementsByClassName('new-item-form')[0] as HTMLFormElement;

const type = document.getElementById('type') as HTMLInputElement;
const tofrom = document.getElementById('tofrom') as HTMLInputElement;
const details = document.getElementById('details') as HTMLInputElement;
const amount = document.getElementById('amount') as HTMLInputElement;

form.addEventListener('submit', (e:Event) => {
    e.preventDefault(); //to stop the form refreshing
    InvoiceArr.push(new InvoiceItem(tofrom.value, details.value, amount.valueAsNumber))
    
})
