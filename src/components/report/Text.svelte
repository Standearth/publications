<script>
    import Icon from "../helpers/Icon.svelte";
    import Boundary from "../helpers/Boundary.svelte";
    export let headline, copy, color;
  </script>
  
  
  <section class="copy">
      <div class="copy-content" style="--color: {color}">
        {#if headline}
          <h1>{headline}</h1>
        {/if}
        {#if copy}
        <p>{@html copy}</p>
        {/if}
    </div>
  </section>
  
  <style>
    .copy {
        padding-bottom:2rem;
    }

    .copy-content {
        color:var(--color);
    }
  
  </style>
  