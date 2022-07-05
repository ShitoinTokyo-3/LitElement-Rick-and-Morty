import { LitElement, html, css } from "lit";

export class TitleApp extends LitElement {
    static get styles(){
        return css`
            :host {
                display: block;
                padding: 16px;
                text-align: center;
            }
            h1 {
                font-size: 4.5em;
                margin: 30px;
            }
            span {
                color: #28B463 ;
            }
        `;
    }
    constructor(){
        super();
    }
    render(){
        return html`
            <h1>The <span>Rick and Morty</span> API</h1>
            
        `;
    }
}
customElements.define('title-app', TitleApp);