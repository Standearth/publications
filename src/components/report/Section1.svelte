<script>
    import Boundary from "../helpers/Boundary.svelte";
    import Text from "./Text.svelte";
    import summary from "./../../data/summary.json";
    import BarChart from "./../charts/BarChart.svelte";
    import { Col, Container, Row } from 'sveltestrap';
    export let boundary_orientation, background, left_spacing, color;
    import { fade } from 'svelte/transition';
  </script>
  
  <section class="copy" style="--section-background: {background};">
    {#if boundary_orientation != "none"}
      <Boundary left_spacing={left_spacing} color={background} orientation={boundary_orientation}/>  
    {/if}
    <Container>
      <Row>
        <Col sm=12 md=12 lg=6 >
          <div class="section-copy" in:fade>
            <Text headline={summary.section_1_headline} copy={summary.section_1_copy} {color}/>
          </div>
        </Col>
        <Col sm=12 md=12 lg=6>
          <div class="section-chart" in:fade>
            <BarChart />
          </div>
        </Col>
      </Row>
    </Container>
  </section>
  
  <style>
    section {
        background: var(--section-background);
        padding-bottom:6rem;
        width:100%;
    }
    .section-chart {
      width:100%;
      height:100%;
      min-height:400px;
    }
  </style>
  