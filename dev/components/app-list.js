import '../utils/get-data.js';
import './block-character.js';
import {LitElement, html, css} from 'lit';


export class AppList extends LitElement {

  static get styles() {
    return css`
      :host {
        display: block;
        padding: 16px;
        text-align: center;
      }
    `;
  }

  static get properties() {
    return {
      list: {type: Array},
    };
  }

  constructor() {
    super();
    this.list = [];
    this.url = 'https://rickandmortyapi.com/api/character'
  }

  _onDataLoaded(e) {
    const dataCharacters = e.detail.results;
    dataCharacters.forEach(character => {
      this.list.push({
        name: character.name,
        image: character.image,
        status: character.status,
        species: character.species,
        id: character.id,
      });
    });
    this.requestUpdate();
  }

/* En este render el get-data es un componente que se encarga de hacer la peticion 
y devolver los datos que se necesitan. El data-loaded es un evento que se dispara
y devuelve los datos. */ 
  render() {
    return html`
      <get-data
        @Data-loaded="${this._onDataLoaded}"
        .url="${this.url}"
        method="GET"
      ></get-data>

      ${this.list.map(character => html`
        <block-character
          .data="${character}"
        ></block-character>
      `)}
    `;
  }
}

window.customElements.define('app-list', AppList);
