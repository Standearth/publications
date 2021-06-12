<script>
    import Icon from "../helpers/Icon.svelte";
    import Boundary from "../helpers/Boundary.svelte";
    import Text from "./Text.svelte";
    import summary from "./../../data/summary.json";
    import { Col, Container, Row } from 'sveltestrap';
    export let boundary_orientation, background, left_spacing, color;
  </script>
  
  
  <section class="copy" style="--section-background: {background};">
    {#if boundary_orientation != "none"}
      <Boundary left_spacing={left_spacing} color={background} orientation={boundary_orientation}/>  
    {/if}
    
    <div class="section-copy">
      <Text copy={summary.section_3_copy} {color}/>
    </div>
    <div id="horgan-cover" style="background-image:url('assets/img/horgan.webp');"></div>
  </section>
  <style>
    .row {
      margin-right:0px !important;
      margin-left:0px !important;
    }
    .copy {
        background: var(--section-background);        
        min-height:500px;
    }

    .section-copy {
      margin-top:5%;
      padding:30px;
      width:40%;
      float:left;
    }

    #horgan-cover { 
      float:right;
      width:60%;
      min-height:500px;
      height:100%;
      background-position:cover;
      background-position: center; /* Center the image */
      background-repeat: no-repeat; /* Do not repeat the image */
      background-size: cover;
    }
  </style>
  