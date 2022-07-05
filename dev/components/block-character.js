import { LitElement, html, css } from "lit";

export class BlockCharacter extends LitElement{

    static get styles() {
        return css`
            :host {
                display: inline-block;
                padding: 16px;
                width: 150px;
                margin: 16px;
                background-color: #fff;
                border-radius: 4px;
            }
            img {
                width: 100%;
                border-radius: 4px;
            }
            h4{
                font-size: 1.2em;
                font-weight: 700;
            }
            `;
    }

    static get properties(){
        return {
            data : {type: Object}
        }
    }

    constructor(){
        super();
    }

    render(){
        return html `
            <div>
                <h4>${this.data.name}</h4>
                <img src="${this.data.image}">
                <p>${this.data.status}</p>
                <p>${this.data.species}</p>
            </div>
        `;
    }
}
customElements.define('block-character', BlockCharacter);