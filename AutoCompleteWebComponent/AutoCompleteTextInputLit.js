import { LitElement, html } from 'lit-element/lit-element.js';

class AutoCompleteTextInput extends LitElement {
  
    render() {
    return html`
        <div>
            <label>${this.title}</label><br>
            <input type="text" 
                id="auto-complete-text-input"
                name="auto-complete-text-input" 
                placeholder="Type your country here..."
                @keyup=${e => this.onInputTextChanged(e.target.value)}>
            <br/>
            <input type="hidden"
                id="auto-complete-suggestion"
                name="auto-complete-suggestion"
                @click=${e => this.onSuggestionClick(e.target.value)}
                readonly>
        </div>
    `;
    }

    constructor() {
        super();
        this.title = 'Default title';
        this.addEventListener('focusout', this.onFocusout);
    }

    static get properties() {
        return{
            title: { type: String },
            suggestions: { type: Array }
        };
    }

    onFocusout(e) {
        console.log("Auto complete text input lost focus.")
    }

    onInputTextChanged(text) {
        console.log("Text changed to: " + text)
        
        // Hide suggestion box
        if(text.length < 1) {
            this.shadowRoot
                .getElementById("auto-complete-suggestion")
                .setAttribute("type", "hidden")
            return
        }

        // Search for match
        let suggestion = this.suggestions.find(x => x.toLowerCase().startsWith(text.toLowerCase()))
        console.log("New suggestion: " + suggestion)

        // Hide suggestion box if no match found
        if(suggestion == undefined || suggestion.length < 1) {
            this.shadowRoot
                .getElementById("auto-complete-suggestion")
                .setAttribute("type", "hidden")
            return
        }

        // Show suggestion box if match found
        this.shadowRoot
            .getElementById("auto-complete-suggestion")
            .setAttribute("placeholder", suggestion)
        this.shadowRoot
            .getElementById("auto-complete-suggestion")
            .setAttribute("type", "text")
    }

    onSuggestionClick(suggestion) {
        console.log("Suggestion box was clicked.")
        this.shadowRoot
            .getElementById("auto-complete-text-input")
            .setAttribute("value", suggestion)
    }
}

// Component name
customElements.define('my-auto-complete-text-input', AutoCompleteTextInput); 
