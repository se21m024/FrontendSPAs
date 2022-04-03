<template>
    <div class="home">
        <h1>{{ msg }}</h1>
        <p>This Vue app with includes an auto-complete text input web component.</p>
        <p>Student: se21m024 @Technikum Wien</p>
        <!-- Nest this div because only one top level div is allowed -->
        <div>
            <!-- Bind to title and suggestedCountries data via ':' -->
            <!-- Bind to current-input-value event via '@' -->
            <my-auto-complete-text-input id="auto-complete-ti"
                                         :title=title
                                         :suggestions=suggestedCountries
                                         @current-input-value="onInputUpdate">
            </my-auto-complete-text-input>
        </div>
        <p>Currently selected country:</p>
        <p>{{ currentInput }}</p>
    </div>
</template>

<script>
    import countries from "/ressources/countries.json";
    import "/web_components/autoCompleteTextInput.js";

    export default {
        name: 'Home',
        props: {
            msg: String
        },
        data: () => ({
            title: 'Country Search:',
            suggestedCountries: JSON.stringify(countries),
            currentInput: ''
        }),
        methods: {
            onInputUpdate(event) {
                console.log('Vue app: received event from web component: ' + event.detail.message);
                this.currentInput = event.detail.message;
            }
        }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .home {
        background-color: #282c34;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-size: calc(10px + 2vmin);
        color: white;
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
    }
</style>

