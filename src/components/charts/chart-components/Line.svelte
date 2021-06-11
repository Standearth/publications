<script>
    import { line } from 'd3-shape';
    import { scaleOrdinal } from 'd3-scale';
  
    import { getContext } from 'svelte';
  
    const { data, xGet, yScale, xScale, zGet } = getContext('LayerCake');
  
    $: lineGen = line()
      .x(d => $xGet(d)+($xScale.bandwidth() / 2))
      .y(d => $yScale(d[1]));
  </script>
  
  <g class="area-group">
    {#each $data as d}
    {#if d.key == 'Deep-Well Royalty Credits'}
      <path
        class='path-line'
        d='{lineGen(d)}'
        stroke="red"
        stroke-width="3"
        fill=none
      ></path>
      {/if}
    {/each}
  </g>