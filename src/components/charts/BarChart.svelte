<script>
  import { LayerCake, Svg, Html } from 'layercake';
  import { scaleBand } from 'd3-scale';

  import Column from './chart-components/Column.svelte';
  import AxisX from './chart-components/AxisX.svelte';
  import AxisY from './chart-components/AxisY.svelte';
  import Annotations from './chart-components/Annotations.svelte';
  import Labels from './chart-components/Bar.Labels.svelte';
  import { format, precisionFixed } from 'd3-format';

  // This example loads csv data as json using @rollup/plugin-dsv
  import data from './../../data/data1.csv';

  const xKey = 'Year';
  const yKey = 'Subsidies';
  const years = [];

  const formatTickY = d => format(`$.${precisionFixed(d)}s`)(d*1000000)
  const annotations = [
    {
      title: 'Fossil Fuel Subsidies (in $ millions)',
      top: '-10%',
      left: '0%',
    },
    {
      text: "BC NDP",
      image: 'assets/img/ndp.webp',
      top:'15%',
      left: '25%',
      width: "80px"
    },
    {
      icon: 'arrow-right',
      width: '30',
      top:'15%',
      left:'25%',
      color: "#F47F27"
    }
  ];

  data.forEach(d => {
    d[yKey] = +d[yKey];
    years.push(d[xKey]);
  });

  var xDomain={years}

</script>

<div class="chart-container">
  <LayerCake
    padding={{ top: 0, bottom: 20, left: 35 }}
    x={xKey}
    y={yKey}
    xScale={scaleBand().paddingInner([0.05]).round(true)}
    xDomain={years}
    yDomain={[0, null]}
    data={data}
  >
    <Svg>
      <AxisX
        gridlines={false}
      />
      <AxisY
        gridlines={true}
        baseline={true}
        snapTicks={true}
      />
      <Column/>
    </Svg>
    <Html>
      <Annotations {annotations}/>
      <Labels />
    </Html>
  </LayerCake>
</div>

<style>
  /*
    The wrapper div needs to have an explicit width and height in CSS.
    It can also be a flexbox child or CSS grid element.
    The point being it needs dimensions since the <LayerCake> element will
    expand to fill it.
  */
  .chart-container {
    width: 100%;
    height: 100%;
    position:relative;
  }
</style>