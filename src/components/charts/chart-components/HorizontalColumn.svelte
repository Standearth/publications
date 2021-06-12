<script>
    import { getContext } from 'svelte';
  
    const { data, xGet, yGet, xScale, yScale, yRange } = getContext('LayerCake');
    export let fill = 'rgb(244, 127, 39)';
  
    $: columnHeight = d => {
      return $yRange[0] - $yGet(d);
    };
  
    $: fillColor = d => {
      if (d.Year == '21/22' || d.Year == '22/23' || d.Year == '23/24') {
        return "rgba(244, 127, 39,0.4)";
      } else if (d.Year == '16/17' || d.Year == '17/18') {
        return "#EE2451";
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
        {fill}
      ></rect>
    {/each}
  </g>