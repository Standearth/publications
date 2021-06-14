<script>
    import Icon from "../helpers/Icon.svelte";
    import Boundary from "../helpers/Boundary.svelte";
    import Text from "./Text.svelte";
    import summary from "./../../data/summary.json";
    import { Col, Container, Row, Accordion, AccordionHeader, AccordionItem } from 'sveltestrap';
    export let boundary_orientation, background, left_spacing, color;
  </script>
  
  
  <section class="copy-recommendations" style="background-image:url('assets/img/landscape.webp');">
    {#if boundary_orientation != "none"}
      <Boundary left_spacing={left_spacing} color=var(--white) orientation={boundary_orientation}/>  
      <a name="take-action"></a>
    {/if}
    <Container>
      <Row>
        <Col sm=12 lg=12>
          <div class="section-copy">
            <Text headline={summary.section_6_headline} color='var(--stand-tertiary)'/>
          </div>
        </Col>
      </Row>
      <Row>
        <Col sm=6 lg=8>

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
        <Col sm=6 lg=4>
          <div id="cta">
            <a href="https://act.stand.earth/page/22268/action/1" target="blank"><h3>Send our recommendations to John Horgan and his government <Icon name="chevrons-right" stroke="var(--white)" stroke-width=2 width="40" /></h3></a>
          </div>
        </Col>

      </Row>
    </Container>
  </section>
  <div id="form-wrap"><iframe src="https://act.stand.earth/page/21659/data/1" frameBorder="0" class="inner_wrapper"></iframe></div>
  
  <style>

    #cta {
      background:var(--stand-primary);
      color:var(--white);
      border:4px solid var(--white);
      padding:20px;
      margin-top:40%;
    }

    #cta a {
      color:var(--white);
    }

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
      text-align:center;
    }

    .copy-content {
      color: var(--stand-tertiary);
    }


    #form-wrap .inner_wrapper {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }

    @media (min-width: 992px) {
      #form-wrap {
          min-height: 265px !important;
          clear:both;
      }
    }
    
    @media (max-width: 700px) {
      #cta {
        margin-top:30px;
      }
    }

    #form-wrap {
      float: none;
      width:100%;
      clear: both;
      position: relative;
      min-height: 540px;
      overflow: hidden;
      display: block;
    }
  </style>
  