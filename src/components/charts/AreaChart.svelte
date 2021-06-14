<script>
    import { LayerCake, Svg, flatten, Html } from 'layercake';
    import { stack } from 'd3-shape';
    import { scaleBand } from 'd3-scale';
    import { scaleOrdinal } from 'd3-scale';
    import { format, precisionFixed } from 'd3-format';
  
    import AxisX from './chart-components/AxisX.svelte';
    import AxisY from './chart-components/AxisY.svelte';
    import AreaStacked from './chart-components/AreaStacked.svelte';
    import Line from './chart-components/Line.svelte';
    import Annotations from './chart-components/Annotations.svelte';
  
    // This example loads csv data as json using @rollup/plugin-dsv
    import data from './../../data/data2u.csv';
  
    const xKey = 'year';
    const yKey = [0, 1];
    const zKey = 'key';
    const years = [];
  
    const seriesNames = Object.keys(data[0]).filter(d => d !== xKey);
    const seriesColors = ['#31a354', '#addd8e', '#f7fcb9'];
  
    data.forEach(d => {
      seriesNames.forEach(name => {
        d[name] = +d[name];
      });
      years.push(d[xKey]);
    });

  
    /* --------------------------------------------
     * Create a stacked data structure
     */
    const stackData = stack()
      .keys(seriesNames);
  
    const series = stackData(data);

    console.log(series);
  
    const formatTickY = d => format(`.${precisionFixed(d)}s`)(d);

    const annotations = [
    {
      type:"title",
      title: 'Fossil Fuel Royalties & Credits (in $ millions)',
      top: '-15%',
      left: '0%',
      color:"var(--white)"
    },
    {
      text: 'Natural gas royalties',
      top: '85%',
      left: '10%',
      color:"var(--white)"
    },
    {
      text: 'Oil and Gas commission',
      top: '72%',
      left: '10%',
      color:"var(--stand-secondary)"
    },
    {
      text: 'Petroleum royalties',
      top: '63%',
      left: '10%',
      color:"var(--stand-secondary)"
    },
    {
      text: 'Deep Well Royalty Credits',
      top: '30%',
      right: '10%',
      color:"var(--white)",
      background:"var(--stand-primary)"
    },
    {
      text: "Year",
      type:"xLabel",
      bottom:'-11%',
      left:'45%',
      color: "var(--white)"
    },
    {
      text: "$ millions",
      type:"yLabel",
      top:'45%',
      left:'-15%',
      color: "var(--white)"
    }
    ]
  </script>
  
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
    }
  </style>
  
  <div class="chart-container">
    <LayerCake
      padding={{ top: 0, right: 0, bottom: 20, left: 17 }}
      x={d => d.data[xKey]}
      y={yKey}
      z={zKey}
      xScale={scaleBand().paddingInner([0.05]).round(true)}
      xDomain={years}
      zScale={scaleOrdinal()}
      zDomain={seriesNames}
      zRange={seriesColors}
      flatData={flatten(series)}
      data={series}
    >
      <Svg>
        <AxisX
          gridlines={false}
          color='var(--white)'
        />
        <AxisY
          formatTick={formatTickY}
          color='var(--white)'
        />
        <Line/>
        <AreaStacked/>
        
      </Svg>
      <Html>
        <Annotations {annotations}/>
    </Html>
    </LayerCake>
  </div>