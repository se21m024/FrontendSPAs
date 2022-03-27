//import { LitElement, html } from 'lit-element';
import { LitElement, html } from 'lit-element/lit-element.js';

//import { LitElement, html } from './node_modules/lit-element/lit-element.js';
//import { html, LitElement } from 'https://unpkg.com/@polymer/lit-element@latest/lit-element.js?module';

class AutoCompleteTextInput extends LitElement {
  
    render() {
    return html`
        <div>
            <label for="auto-complete-text-input">${this.title}</label><br>
            <input type="text" id="auto-complete-text-input" name="auto-complete-text-input">
        </div>
    `;
    }

    constructor() {
        super();
        this.title = 'Default title';
    }

    static get properties(){
        return{
            title: { type: String },
        };
    }

}

// Name the component
customElements.define('my-auto-complete-text-input', AutoCompleteTextInput); 
