<template>
    <div id="app">
        <Home msg="Vue App" suggestedCountries='["Poech", "Hetzen", "Hietz"]' />
    </div>
</template>

<script>
    import Home from './components/Home.vue';

    export default {
        name: 'app',
        components: {
            Home
        }
    };
</script>

<style>
</style>

