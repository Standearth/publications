<script>
  // Import the getContext function from svelte
  import { getContext } from "svelte";

  // Access the context using the 'LayerCake' keyword
  // Grab some helpful functions
  const { data, xGet, yGet, yScale } = getContext("LayerCake");

  function pickLabel(d) {
    if (d.total < 1000) {
      return "$"+Math.round((d.total) * 100) / 100+"M";
    } else {
      return "$"+Math.round((d.total/1000) * 100) / 100+"B";
    }
    
  }
</script>


  {#each $data as d}
    <p style="left: {$xGet(d)+$yScale.bandwidth()}px; top: {$yGet(d)}px;">{pickLabel(d)}</p>
  {/each}


<style>
	p {
    font-size:0.7rem;
    font-weight:bold;
		position: absolute;
    font-family: var(--bs-font-sans-serif);
		margin: 0;
		line-height: 1;
		transform: translate(-50%, 50%);
	}
</style>