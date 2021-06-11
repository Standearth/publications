<script>
    import { LayerCake, Svg, Html } from 'layercake';
    import { scaleBand } from 'd3-scale';
  
    import Line from './chart-components/Line.svelte';
    import AxisX from './chart-components/AxisX.svelte';
    import AxisY from './chart-components/AxisY.svelte';
    import Annotations from './chart-components/Annotations.svelte';
  
    // This example loads csv data as json using @rollup/plugin-dsv
    import data from './../../data/data2.csv';

    console.log(data[0]);
  
    const xKey = 'year';
    const yKey = 'val';
    const yearsRaw = [];
  
    function onlyUnique(value, index, self) {
        return self.indexOf(value) === index;
    }

    data.forEach(d => {
      d[yKey] = +d[yKey];
      yearsRaw.push(d[xKey]);
      
    });

    var years = yearsRaw.filter(onlyUnique);
    console.log(years);
    

    const annotations = [
    {
      title: 'Fossil Fuel Royalties between 2016 and 2020',
      top: '-10%',
      left: '0%',
      color:"var(--white)"
    }
    ];
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
      padding={{ right: 10, bottom: 20, left: 25 }}
      x={xKey}
      y={yKey}
      yDomain={[0, null]}
      xScale={scaleBand().paddingInner([0.05]).round(true)}
      xDomain={years}
      data={data}
    >
      <Svg>
        <AxisX color="#fff"/>
        <AxisY
          color="#fff"
          ticks={4}
        />
        <Line/>
      </Svg>
      <Html>
        <Annotations {annotations}/>
      </Html>
    </LayerCake>
  </div>