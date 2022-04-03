<template>
    <div class="home">
        <h1>{{ msg }}</h1>
        <h1>{{ suggestedCountries }}</h1>
        <h1>Vue App</h1>
        <p>This Vue app with includs an auto-complete text input web component.</p>
        <p>Student: se21m024 @Technikum Wien</p>
        <!-- Nest this div because only one top level div is allowed -->
        <div>
            <my-auto-complete-text-input id="auto-complete-ti" title="City Search" :suggestions=suggestedCountries2></my-auto-complete-text-input>
        </div>
    </div>
</template>

<!--<script type="module" src="./web_components/autoCompleteTextInput.js"></script>-->

<script>
    //import countries from "/ressources/countries.json";
    import "/web_components/autoCompleteTextInput.js";
    //import { ref, onUpdated } from 'vue'

    export default {
        name: 'Home',
        props: {
            msg: String,
            suggestedCountries: String
        }
        ,
        //data() {
        //    return {
        //        suggestedCountries: suggestedCountries
        //    }
        //}
        data: () => ({ suggestedCountries2: '["Bronx", "Buddah"]'})
    };

    

    //onUpdated(() => {
    //    // text content should be the same as current `count.value`
    //    console.log(document.getElementById('auto-complete-ti').title)
    //})

    //document.getElementById("auto-complete-ti").suggestions = countries;
    //const x = countries;

    //let jsondata = axios.get('/ressources/countries.json');
    //document.getElementById("auto-complete-ti").suggestions = jsondata;

    //fetch("/ressources/countries.json")
    //    .then(response => {
    //        return response.json();
    //    })
    //    .then(jsondata => document.getElementById("auto-complete-ti").suggestions = jsondata);
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

