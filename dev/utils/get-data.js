import { LitElement } from "lit";

export class GetData extends LitElement{
   
    static get properties(){
        return {
            url: {type: String},
            method: {type: String},
        }
    }

    constructor(){
        super();
    }

    firstUpdated(changes){
        super.firstUpdated(changes);
        this.getData();
    }

    getData(){
        fetch(this.url, {method: this.method})
            .then(res => res.json())
            .then(data => {
                this.dispatchEvent(new CustomEvent('Data-loaded', {detail: data}));
            })
            .catch(err => console.log(err));
        }
    

}

customElements.define('get-data', GetData);
