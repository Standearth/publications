<script>
    import { LayerCake, Svg, Html } from 'layercake';
    import { scaleBand } from 'd3-scale';
  
    import Column from './chart-components/HorizontalColumn.svelte';
    import AxisX from './chart-components/AxisX.svelte';
    import AxisY from './chart-components/AxisY.svelte';
    import Annotations from './chart-components/Annotations.svelte';
    import Labels from './chart-components/HorizontalBar.Labels.svelte';
    import { format, precisionFixed } from 'd3-format';
  
    // This example loads csv data as json using @rollup/plugin-dsv
    import data from './../../data/data5.csv';
  
    const xKey = 'total';
    const yKey = 'cat';
    const years = [];
    const annotations = [
      {
        type: "title",
        title: 'Revenue Estimates for 2021/2022',
        top: '-17%',
        left: '0%',
      },
    {
      text: "$ millions",
      type:"xLabel",
      bottom:'-15%',
      left:'40%',
      color: "#000"
    }
    ];
  
    data.forEach(d => {
      d[xKey] = +d[xKey];
      console.log(d);
      years.push(d[yKey]);
    });
  
  </script>
  
  <div class="chart-container">
    <LayerCake
      padding={{ top: 0, bottom: 20, left: 35 }}
      x={xKey}
      y={yKey}
      yScale={scaleBand().paddingInner([0.05]).round(true)}
      yDomain={years}
      xDomain={[0, null]}
      data={data}
    >
      <Svg>
        <AxisX
          gridlines={true}
        />
        <AxisY
          gridlines={false}
          baseline={true}
          snapTicks={true}
          highlight={true}
        />
        <Column/>
      </Svg>
      <Html>
        <Annotations {annotations}/>
        <Labels/>
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