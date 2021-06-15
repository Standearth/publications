<script>
    import Icon from "../helpers/Icon.svelte";
    import Boundary from "../helpers/Boundary.svelte";
    import Text from "./Text.svelte";
    import summary from "./../../data/summary.json";
    import HorizontalBar from "./../charts/HorizontalBarChart.svelte"
    import { Col, Container, Row } from 'sveltestrap';
    export let boundary_orientation, background, left_spacing, color;
  </script>
  
  
  <section class="copy" style="--section-background: {background};">
    {#if boundary_orientation != "none"}
      <Boundary left_spacing={left_spacing} color={background} orientation={boundary_orientation}/>  
    {/if}
    <Container>
      <Row>
        <Col sm={{size:8, offset:2}}>
          <div class="section-copy">
            <Text headline={summary.section_5_headline} copy={summary.section_5_copy} {color}/>
          </div>
        </Col>

      </Row>
    </Container>
  </section>
  
  <style>
    .copy {
        background: var(--section-background);
    }

    

    .section-copy {
      padding-bottom:10%;
    }

    
  </style>
  