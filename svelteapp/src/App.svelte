<script>
  import Counter from './components/Counter.svelte';
  import Form from './components/Form.svelte';
  let count = 0;
</script>

<Counter bind:count={count}/>
<hr class="my-5">
<Form/>

<style global lang="postcss">
    @tailwind base;
    @tailwind components;
    @tailwind utilities;

    :global(body) {
        font-family: Avenir, Helvetica, Arial, sans-serif;
    }
</style>
