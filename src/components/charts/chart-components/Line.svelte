<script>
    import { getContext } from 'svelte';
  
    const { data, xGet, yGet } = getContext('LayerCake');
  
    export let stroke = '#ab00d6';
    let s1 = [];
    let s2 = [];
    let s3 = [];
    
    $data.forEach(d => {
      if(d.X1 == 'Total') {
        s1.push(d.val)
      }
    });
    s1 = $data.filter(d => d.X1 == 'Petroleum royalties');
    s2 = $data.filter(d => d.X1 == 'Oil and Gas Commission fees and levies');
    s3 = $data.filter(d => d.X1 == 'Natural gas royalties');
    console.log(s1);
  
    $: path1 = 'M' + s1
      .map(d => {
        return $xGet(d)+50 + ',' + $yGet(d);
      })
      .join('L');

    $: path2 = 'M' + s2
    .map(d => {
    return $xGet(d)+50 + ',' + $yGet(d);
    })
    .join('L');

    $: path3 = 'M' + s3
    .map(d => {
    return $xGet(d)+50 + ',' + $yGet(d);
    })
    .join('L');
  </script>
  
  <path class='path-line' d='{path1}' stroke='var(--green)'></path>
  <path class='path-line' d='{path2}' stroke='var(--red)'></path>
  <path class='path-line' d='{path3}' stroke='var(--yellow)'></path>

  
  <style>
    .path-line {
      fill: none;
      stroke-linejoin: round;
      stroke-linecap: round;
      stroke-width: 4;
    }
  </style>