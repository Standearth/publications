<script>
    import Icon from "../helpers/Icon.svelte";
    import Boundary from "../helpers/Boundary.svelte";
    import Text from "./Text.svelte";
    import summary from "./../../data/summary.json";
    import { Col, Container, Row, Accordion, AccordionHeader, AccordionItem } from 'sveltestrap';
    export let boundary_orientation, background, left_spacing, color;
  </script>
  
  
  <section class="copy-recommendations" style="background-image:url('assets/img/cover.jpeg');">
    {#if boundary_orientation != "none"}
      <Boundary left_spacing={left_spacing} color=var(--white) orientation={boundary_orientation}/>  
    {/if}
    <Container>
      <Row>
        <Col sm=12 lg={{size:8, offset:2}}>
          <div class="section-copy">
            <Text headline={summary.section_6_headline} {color}/>
          </div>

          <Accordion>
            <AccordionItem active header="{summary.section_6_copy_1_headline}">
              <Text copy={summary.section_6_copy_1_content} color=var(--stand-tertiary)/>
            </AccordionItem>
            <AccordionItem header="{summary.section_6_copy_2_headline}">
              <Text copy={summary.section_6_copy_2_content} color=var(--stand-tertiary)/>
            </AccordionItem>
            <AccordionItem header="{summary.section_6_copy_3_headline}">
              <Text copy={summary.section_6_copy_3_content} color=var(--stand-tertiary)/>
            </AccordionItem>
            <AccordionItem header="{summary.section_6_copy_4_headline}">
              <Text copy={summary.section_6_copy_4_content} color=var(--stand-tertiary)/>
            </AccordionItem>
          </Accordion>
        </Col>

      </Row>
    </Container>
  </section>
  <div id="form-wrap"><iframe src="https://act.stand.earth/page/21659/data/1" frameBorder="0" class="inner_wrapper"></iframe></div>
  
  <style>
    .copy-recommendations {
        padding-bottom:4rem;
        background-position:cover;
        width:100%;
        background-position: center; /* Center the image */
        background-repeat: no-repeat; /* Do not repeat the image */
        background-size: cover;
    }

    .section-copy {
      padding-top:30px;
    }

    .copy-content {
      color: var(--stand-tertiary);
    }

    #form-wrap {
      float: none;
      width:100%;
      clear: both;
      position: relative;
      min-height: 410px;
      overflow: hidden;
      display: block;
    }

    #form-wrap .inner_wrapper {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }

    @media (min-width: 992px) {
      #form_wrap {
          min-height: 265px;
      }
    }
  </style>
  