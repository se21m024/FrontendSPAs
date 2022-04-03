<template>
    <div class="home">
        <h1>{{ msg }}</h1>
        <p>This Vue app with includs an auto-complete text input web component.</p>
        <p>Student: se21m024 @Technikum Wien</p>
        <!-- Nest this div because only one top level div is allowed -->
        <div>
            <!-- Bind title and suggestedCountries -->
            <my-auto-complete-text-input id="auto-complete-ti" :title=title :suggestions=suggestedCountries></my-auto-complete-text-input>
        </div>
    </div>
</template>

<script>
    import countries from "/ressources/countries.json";
    import "/web_components/autoCompleteTextInput.js";

    export default {
        name: 'Home',
        props: {
            msg: String
            //suggestedCountries: String
        },
        data: () => ({
            title: 'Country Search',
            suggestedCountries: JSON.stringify(countries)
        })
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

