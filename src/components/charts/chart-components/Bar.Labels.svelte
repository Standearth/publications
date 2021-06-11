<script>
  // Import the getContext function from svelte
  import { getContext } from "svelte";

  // Access the context using the 'LayerCake' keyword
  // Grab some helpful functions
  const { data, xGet, yGet, xScale } = getContext("LayerCake");
  function pickLabel(d) {
    if (d.Year == '2016/17' || d.Year == '2017/18' || d.Year == '2018/19') {
      return "$"+Math.round((d.Subsidies) * 100) / 100+"M";
    } else {
      return "$"+Math.round((d.Subsidies/1000) * 100) / 100+"B";
    }
    
  }
</script>


  {#each $data as d}
    <p style="left: {$xGet(d)+$xScale.bandwidth()/2}px; top: {$yGet(d)}px;">{pickLabel(d)}</p>
  {/each}


<style>
	p {
    font-size:0.7rem;
    font-weight:bold;
		position: absolute;
		margin: 0;
		line-height: 1;
		transform: translate(-50%, 50%);
	}
</style>