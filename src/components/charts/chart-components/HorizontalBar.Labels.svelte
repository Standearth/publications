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

  $: xcoord = d  => {
    if (d.total > 7000) {
      return $xGet(d)-20;
    } else {
      return $xGet(d)+$yScale.bandwidth()-10;
    }
  }

  function pickColor(d) {
    if (d.total > 7000) {
      return 'var(--white)';
    } else {
      return 'var(--black)';
    }
  }
</script>


  {#each $data as d}
    <p style="left: {xcoord(d)}px; top: {$yGet(d)+5}px; color: {pickColor(d)}">{pickLabel(d)}</p>
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