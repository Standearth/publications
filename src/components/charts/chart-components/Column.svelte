<script>
  import { getContext } from 'svelte';

  const { data, xGet, yGet, xScale, yScale, yRange } = getContext('LayerCake');
  export let fill = '#00bbff';

  $: columnHeight = d => {
    return $yRange[0] - $yGet(d);
  };

  $: fillColor = d => {
    if (d.Year == '2021/22' || d.Year == '2022/23' || d.Year == '2023/24') {
      return "rgba(0,187,255,0.4)";
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
      x="{$xGet(d)}"
      y="{$yGet(d)}"
      width={$xScale.bandwidth()}
      height="{columnHeight(d)}"
      fill={fillColor(d)}
    ></rect>
  {/each}
</g>