<script>
    import Icon from "../helpers/Icon.svelte";
    import Boundary from "../helpers/Boundary.svelte";
    import Text from "./Text.svelte";
    import summary from "./../../data/summary.json";
    import Multi from "./../charts/Multi.svelte";
    import { Col, Container, Row } from 'sveltestrap';
    export let boundary_orientation, background, left_spacing, color;
  </script>
  
  
  <section class="copy" style="--section-background: {background};">
    {#if boundary_orientation != "none"}
      <Boundary left_spacing={left_spacing} color=var(--stand-primary) orientation={boundary_orientation}/>  
    {/if}
    <Container>
      <Row>
        <Col sm=12 lg=8>
          <div class="section-copy">
            <Text headline={summary.section_4_headline} copy={summary.section_4_copy} {color}/>
          </div>
        </Col>
        <Col sm=12 lg={{size:8, offset:4}}>
          <div class="section-chart">
            <Multi />
          </div>
        </Col>
      </Row>
    </Container>
    <div id="flare" style="background-image:url('assets/img/flare.jpeg');width:100%;">
    <Container>
        <Row>
      <Col sm=12 lg=6>
        <div class="section-copy">
          <Text copy={summary.section_4_copy_3} color="#fff"/>
        </div>
      </Col>
    </Row>
  </Container>
    </div>
    
  </section>
  
  <style>
    .copy {
        background: var(--section-background);
    }

    #flare {
        padding-bottom:4rem;
        margin-top:50px;
        padding-top:2rem;
        background-position:cover;
        width:100%;
        min-height:100px;
        background-position: center; /* Center the image */
        background-repeat: no-repeat; /* Do not repeat the image */
        background-size: cover;
    }

    #flare .section-copy {
      background:rgba(0,0,0,0.5);
      padding-left:20px;
    }

    .section-chart {
      width: 100%;
      height: 100%;
      min-height:400px;
    }

    .section-copy {
      padding-top:30px;
      margin-bottom:50px;
    }
  </style>
  