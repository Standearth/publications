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
        <Col sm={{size:6}}>
          <div class="section-copy">
            <Text headline={summary.section_5_headline} copy={summary.section_5_copy} {color}/>
          </div>
        </Col>
        <Col sm=6>
          <div class="section-chart">
            <HorizontalBar />
          </div>
        </Col>
        <Col sm={{size:8, offset:2}}>
          <div class="section-copy" style="text-align:center;margin-top:100px;">
            <Text copy={summary.section_5_copy_2} {color}/>
          </div>
        </Col>

      </Row>
    </Container>
  </section>
  
  <style>
    .copy {
        background: var(--section-background);
    }

    .section-chart {
      height:100%;
      width:100%;
      margin-top:50px;
    }

    .section-copy {
      padding-top:0px;
    }
  </style>
  