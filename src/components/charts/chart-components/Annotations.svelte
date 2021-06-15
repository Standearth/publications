<script>
    import { setContext, onMount } from 'svelte';
    import Icon from "./../../helpers/Icon.svelte";
  
    const vals = ['top', 'right', 'bottom', 'left'];
  
    export let container = undefined;
    export let annotations = [];
  
    $: fillStyle = d => {
      let style = '';
      vals.forEach(val => {
        if (d[val]) {
          style += `${val}:${d[val]};`;
        }
      });
      return style;
    };
  </script>
  
  <div class="layercake-annotations" bind:this={container}>
    {#each annotations as d, i}
      {#if d.type == "image"}
        <img class="layercake-annotation" src="{d.image}" alt="{d.text}" style="z-index:999;width:{d.width};top:{d.top};left:{d.left};">
      {:else if d.type == "icon"}
        <div class="layercake-annotation" style="border-left:2px solid #F47F27;top:{d.top};left:{d.left};z-index:999;">
          <Icon name="{d.icon}" stroke="{d.color}" stroke-width="3" width="{d.width}" height="{d.width*2.5}" />
        </div>
        {:else if d.type == "title"}
        <div
          class="layercake-annotation"
          data-id="{i}"
          style="{fillStyle(d)};color:{d.color}"
        ><h4>{d.title}</h4></div>
        {:else if d.type == "xLabel"}
        <div
          class="layercake-annotation xLabel"
          data-id="{i}"
          style="{fillStyle(d)};color:{d.color};background:{d.background};padding-bottom:0px;"
        ><p>{d.text}</p></div>
        {:else if d.type == "yLabel"}
        <div
          class="layercake-annotation yLabel"
          data-id="{i}"
          style="{fillStyle(d)};color:{d.color};background:{d.background};padding-bottom:0px;"
        ><p>{d.text}</p></div>
        {:else}
        <div
          class="layercake-annotation"
          data-id="{i}"
          style="{fillStyle(d)};color:{d.color};background:{d.background};padding-bottom:0px;}"
        ><p style="font-family:{d.highlight == true ? 'var(--sans-bold)':'var(--sans)'}">{d.text}</p></div>
      {/if}
      
    {/each}
  </div>
  
  <style>
    .layercake-annotation {
      position: absolute;
      padding-left:5px;
    }

    p {
      margin-bottom:0px;
    }

    .xLabel, .yLabel {
      font-size:0.8rem;
      min-width:100px;
      
    }

    .yLabel {
      transform: rotate(-90deg);
      -webkit-transform: rotate(-90deg);
      -moz-transform: rotate(-90deg);
      -ms-transform: rotate(-90deg);
      -o-transform: rotate(-90deg);
    }

    @media (max-width: 602px) {
      .yLabel {
       display:none;
      }
    }

    h4 {
      border-left:5px solid var(--stand-primary);
      padding:5px;
    }

  </style>