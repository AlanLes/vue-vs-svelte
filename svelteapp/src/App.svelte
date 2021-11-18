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
    }
</style>
