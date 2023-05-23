import HasFormatter from "../interfaces/HasFormatter.js";
export default class ListTemplate {
    constructor(
        private container: HTMLUListElement
    ){};
    render(item: HasFormatter, heading: string, position: 'start' | 'end' ):void {//the class of both payment and invoice item have the type HasFormatter so this means only these things can be passed into the function
        const li = document.createElement('li');
        const h4 = document.createElement('h4');
        h4.innerText = heading;
        li.append(h4) 
        const p = document.createElement('p')
        p.innerText = item.format();
        li.append(p)
        if(position == 'start') {
            this.container.prepend(li)
        } else (this.container.append(li))
    }
}