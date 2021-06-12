<script>
    import { getContext } from 'svelte';
    import { line } from 'd3-shape';
  
    const { data, xGet, yGet, zGet, xScale, yScale, xRange, yRange, xDomain, yDomain } = getContext('LayerCake');
  
    $: fillColor = d => {
      if (d.key == '21/22' || d.Year == '22/23' || d.Year == '23/24') {
        return "rgba(244, 127, 39,0.4)";
      } else if (d.Year == '16/17' || d.Year == '17/18') {
        return "#EE2451";
      } else {
        return "red";
      }
      
    };
    $: getStroke = d => {
      console.log(d);
      if (d[0].key != 'Actuals ($m)') {
        return "5,5";
      } else {
        return "0,0";
      }
    };

    $: getStrokeWidth = d => {
      console.log(d);
      if (d[0].key != 'Actuals ($m)') {
        return "3";
      } else {
        return "6";
      }
    };


    $: lineGen = line()
      .defined(function(d) {return d.value != 0})
      .x(d => $xGet(d)+($xScale.bandwidth() / 2))
      .y(d => $yGet(d));

  </script>
  
  <g class="line-group">
    {#each $data as group}
      <path
        class='path-line'
        d='{lineGen(group.values)}'
        i='{group.key}'
        stroke="{$zGet(group)}"
        stroke-dasharray="{getStroke(group.values)}"
        stroke-width="{getStrokeWidth(group.values)}"
      ></path>
    {/each}
  </g>
  
  <style>
    .path-line {
      fill: none;
      stroke-linejoin: round;
      stroke-linecap: round;
    }
  </style>