<script>
  import Counter from './components/Counter.svelte';
  let count = 0;
</script>

<Counter bind:count={count}/>

<style global lang="postcss">
    @tailwind base;
    @tailwind components;
    @tailwind utilities;

    :global(body) {
        font-family: Avenir, Helvetica, Arial, sans-serif;
    }
</style>
