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
            <button
                id="auto-complete-suggestion"
                name="auto-complete-suggestion"
                @click=${e => this.onSuggestionClick(e.target.innerHTML)}
                style="visibility:hidden;width:fit-content;height:fit-content">
        </div>
    `;
    }

    constructor() {
        super();
        this.title = 'Default title';
        this.suggestions = '[]';    // string and not object because auf web components restriction
        this.addEventListener('focusout', this.onFocusout);
    }

    static get properties() {
        return {
            title: { type: String },
            suggestions: { type: String }
        };
    }

    // Emit an event with the current value of the text input
    // when the web component looses the focus
    onFocusout() {
        let currentValue = this.shadowRoot
            .getElementById("auto-complete-text-input")
            .value;

        console.log("Emit current input text value: " + currentValue);

        let event = new CustomEvent("current-input-value", {
            detail: {
                message: currentValue
            }
        });

        this.dispatchEvent(event);
    }

    // Text of the text input changed
    onInputTextChanged(text) {
        console.log("Text changed to: " + text);

        // Hide suggestion box
        if (text.length < 1) {
            this.shadowRoot
                .getElementById("auto-complete-suggestion")
                .style
                .visibility = 'hidden';
            return;
        }

        // Search for match
        let suggestion = JSON.parse(this.suggestions).find(x =>
            x.toLowerCase().startsWith(text.toLowerCase()));

        console.log("New suggestion: " + suggestion);

        // Hide suggestion box if no match found
        if (suggestion == undefined || suggestion.length < 1) {
            this.shadowRoot
                .getElementById("auto-complete-suggestion")
                .style
                .visibility = 'hidden';
            return;
        }

        // Show suggestion box if match found
        this.shadowRoot
            .getElementById("auto-complete-suggestion")
            .innerHTML = suggestion;

        this.shadowRoot
            .getElementById("auto-complete-suggestion")
            .style.visibility = 'visible';
    }

    // Write suggestion clicked back into text input
    onSuggestionClick(suggestion) {
        console.log("Suggestion box was clicked.");
        this.shadowRoot
            .getElementById("auto-complete-text-input")
            .value = suggestion;
    }
}

// Component name
customElements.define('my-auto-complete-text-input', AutoCompleteTextInput);
