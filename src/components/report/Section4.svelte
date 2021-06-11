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
      <Boundary left_spacing={left_spacing} color=var(--stand-primary) orientation={boundary_orientation}/>  
    {/if}
    <Container>
      <Row>
        <Col sm=10>
          <div class="section-copy">
            <Text headline={summary.section_4_headline} copy={summary.section_4_copy} {color}/>
          </div>
        </Col>
        <Col sm={{size:8, offset:4}}>
          <div class="section-chart">
            
          </div>
        </Col>
        <Col sm=10>
          <div class="section-copy">
            <Text copy={summary.section_4_copy_2} {color}/>
          </div>
        </Col>

      </Row>
    </Container>
    <img alt="fracking flare" src="assets/img/flare.jpeg" style="width:100%;">
  </section>
  
  <style>
    .copy {
        background: var(--section-background);
    }

    .section-chart {
      background:#bbb;
      height:20px;
      width:100%;
    }

    .section-copy {
      padding-top:30px;
    }
  </style>
  