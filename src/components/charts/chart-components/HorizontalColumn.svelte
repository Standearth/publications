<script>
    import { getContext } from 'svelte';
  
    const { data, xGet, yGet, xScale, yScale, yRange } = getContext('LayerCake');
    export let fill = 'var(--stand-secondary)';
  
    $: columnHeight = d => {
      return $yRange[0] - $yGet(d);
    };
  
    $: fillColor = d => {
      if (d.cat == 'Oil & Gas') {
        return "var(--stand-primary)";
      } else {
        return fill;
      }
       
    };
  
  </script>
  
  <g class="bar-group">
    {#each $data as d, i}
      <rect
        class='group-rect'
        data-id="{i}"
        x="{$xScale.range()[0]}"
        y="{$yGet(d)}"
        height={$yScale.bandwidth()}
        width="{$xGet(d)}"
        fill="{fillColor(d)}"
      ></rect>
    {/each}
  </g>