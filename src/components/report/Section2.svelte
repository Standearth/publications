<script>
    import Icon from "../helpers/Icon.svelte";
    import Boundary from "../helpers/Boundary.svelte";
    import Text from "./Text.svelte";
    import summary from "./../../data/summary.json";
    import AreaChart from "./../charts/AreaChart.svelte";
    import { Col, Container, Row } from 'sveltestrap';
    export let boundary_orientation, background, left_spacing, color;
  </script>
  
  
  <section class="copy" style="--section-background: {background};">
    {#if boundary_orientation != "none"}
      <Boundary left_spacing={left_spacing} color={background} orientation={boundary_orientation}/>  
    {/if}
    <Container>
      <Row>
        <Col sm={{size:12, order:2}} md=6>
          <div class="section-chart">
            <AreaChart />
          </div>
        </Col>
        <Col sm={{size:12, order:1}} md=6>
          <div class="section-copy">
            <Text headline={summary.section_2_headline} copy={summary.section_2_copy} {color}/>
          </div>
        </Col>
      </Row>
    </Container>
  </section>
  
  <style>
    .copy {
        background: var(--section-background);
        padding-bottom:4rem;
    }

    .section-copy {
      margin-top:3rem;
    }
    .section-chart {
      width:100%;
      height:80%;
      margin-top:100px;
      min-height:400px;
    }
  </style>
  