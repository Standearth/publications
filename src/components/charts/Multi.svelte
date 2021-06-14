<script>
    import { LayerCake, ScaledSvg, Svg, Html } from 'layercake';
    import { scaleOrdinal } from 'd3-scale';
    import { timeParse, timeFormat } from 'd3-time-format';
    import { scaleBand } from 'd3-scale';
    import { format, precisionFixed } from 'd3-format';
  
    import MultiLine from './chart-components/MultiLine.svelte';
    import AxisX from './chart-components/AxisX.html.svelte';
    import AxisY from './chart-components/AxisY.html.svelte';
    import Annotations from './chart-components/Annotations.svelte';
  
    // This example loads csv data as json using @rollup/plugin-dsv
    import data from './../../data/data3a1.csv';
  
    /* --------------------------------------------
     * Set what is our x key to separate it from the other series
     */
    const xKey = 'year';
    const yKey = 'value';
    const zKey = 'key';
    const years = [];

    const parseDate = timeParse('%Y-%m-%d');

    const seriesNames = Object.keys(data[0]).filter(d => d !== xKey);
    const seriesColors = ['#f2f0f7', '#dadaeb', '#bcbddc', '#9e9ac8','#756bb1','#54278f'];

    const annotations = [
    {
      type: "title",
      title: "Natural Gas royalty revenue - future estimates vs actual figures",
      top: '-10%',
      left: '0%',
      color:"var(--stand-tertiary)"
    },
    {
      text: "Actual Revenue",
      top:'50%',
      left:'5%',
      color: "#54278f",
      highlight:true
    },
    {
      text: "Future Estimates",
      top:'10%',
      left:'65%',
      color: "#bcbddc",
      highlight:false
    },
    {
      text: "Year",
      type:"xLabel",
      bottom:'-11%',
      left:'45%',
      color: "#000"
    },
    {
      text: "$ millions",
      type:"yLabel",
      top:'45%',
      left:'-12%',
      color: "#000",
    }
    ];

    const formatTickY = d => format(`.${precisionFixed(d)}s`)(d)
  
    const dataLong = seriesNames.map(key => {
      return {
        key,
        values: data.map(d => {
          d[xKey]
          return {
            key,
            [yKey]: +d[key],
            [xKey]: d[xKey]
          };
        })
      };
    });

    data.forEach(d => {
      years.push(d[xKey]);
    });
  
    // Make a flat array of the `values` of our nested series
    // we can pluck the `value` field from each item in the array to measure extents
    const flatten = data => data.reduce((memo, group) => {
      return memo.concat(group.values);
    }, []);
  
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
      ssr={true}
      percentRange={true}
      padding={{ top: 7, right: 10, bottom: 20, left: 25 }}
      x={xKey}
      y={yKey}
      z={zKey}
      xScale={scaleBand().paddingInner([0.05]).round(true)}
      xDomain={years}
      yDomain={[0, null]}
      zScale={scaleOrdinal()}
      zDomain={seriesNames}
      zRange={seriesColors}
      flatData={flatten(dataLong)}
      data={dataLong}
    >
      <ScaledSvg>
        <MultiLine/>
      </ScaledSvg>

      <Html>
        <AxisX
        gridlines={false}
        color='var(--stand-tertiary)'
        />
        <AxisY
          baseline={true}
          formatTick={formatTickY}
          color='var(--stand-tertiary)'
        />
        <Annotations {annotations}/>
      </Html>
    </LayerCake>
  </div>