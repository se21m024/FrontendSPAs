const template = document.createElement('template');
template.innerHTML = `
    <div>
        <label for="auto-complete-text-input">Auto complete Field:</label><br>
        <input type="text" id="auto-complete-text-input" name="auto-complete-text-input">
    </div>
`;

export class AutoCompleteTextInput extends HTMLElement {

    static get observedAttributes() {
        return [ 'title' ];
    }

    constructor() {
        super();
        const shadowRoot = this.attachShadow({mode: 'closed'});
        shadowRoot.appendChild(template.content.cloneNode(true));
    }

    connectedCallback() {
        console.log('auto-complete-text-input: component added to DOM.');

        if(!this.title) {
            this.title = 'Insert Text:';
        }
    }

    // Attention! Attributes are always string, if you want something else, you must parse it.
    get title() {
        console.log('auto-complete-text-input: attribte <title>: return value <' + this.getAttribute('title') + '>.');
        return +this.getAttribute('title');
    }

    // if you set the property in this class, you must sync them with the attribute
    set title(value) {
        console.log('auto-complete-text-input: attribte <title>: set value to <' + value + '>.');
        this.setAttribute('title', value);
    }

    attributeChangedCallback(name, oldVal, newVal) {
        if (oldVal !== newVal) {
          switch(name) {
              case 'title':
                  console.log('auto-complete-text-input: attribte <title>: value changed from <' + oldVal + '> to <' + newVal + '>.');
                  this.title = newVal;
                  break;
         }
       }
     }
}

window.customElements.define('my-auto-complete-text-input', AutoCompleteTextInput);
