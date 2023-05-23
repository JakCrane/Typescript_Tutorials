import HasFormatter from '../interfaces/HasFormatter'
export default class PaymentItem implements HasFormatter{
    
    constructor(
        readonly recipient:string,
        private details:string,
        public amount: number,
    ){}

    
    format() {
        return `${this.recipient} is owed £${this.amount} for ${this.details}`
    }
}