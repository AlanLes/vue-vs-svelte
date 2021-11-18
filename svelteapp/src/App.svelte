<script>
  import Counter from './components/Counter.svelte';
</script>

<Counter/>

<style global lang="postcss">
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
    :global(body) {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
    }
</style>
