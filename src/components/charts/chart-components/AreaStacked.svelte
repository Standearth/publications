<script>
    import { area } from 'd3-shape';
    import { scaleOrdinal } from 'd3-scale';
  
    import { getContext } from 'svelte';
  
    const { data, xGet, yScale, xScale, zGet } = getContext('LayerCake');
  
    $: areaGen = area()
      .x(d => $xGet(d)+($xScale.bandwidth() / 2))
      .y0(d => $yScale(d[0]))
      .y1(d => $yScale(d[1]));
  </script>
  
  <g class="area-group">
    {#each $data as d}
    {#if d.key != 'Deep-Well Royalty Credits'}
      <path
        class='path-area'
        d='{areaGen(d)}'
        fill='{$zGet(d)}'
      ></path>
      {/if}
    {/each}
  </g>