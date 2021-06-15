<script>
    import Icon from "../helpers/Icon.svelte";
    import viewport from "../../stores/viewport.js";
    import Header from "../stand/Header.svelte";
    import summary from "./../../data/summary.json";
    import { Col, Container, Row } from 'sveltestrap';
  </script>
  
  <section class="cover overlay" style="height:{$viewport.height-80}px;min-height:700px; background-image:url('assets/img/factor.jpg')">
    <Header />
      <div class="cover-content align-middle">
        <Container>
            <Row>
              <Col sm=12 md=10 lg=7>
                <h1>{summary.title}</h1>
              </Col>
            <Col sm=12 md=6 lg=7>
                <h2>{@html summary.subtitle}</h2>
            </Col>
            <Col sm=12 md=10 lg=12>
                <div class="pdf-share social-share">
                    <a target="_new" href="https://www.stand.earth/sites/stand/files/bc-ff-subsidies-report-final-rev.pdf"><button>DOWNLOAD PDF <Icon name="download" stroke="var(--white)" stroke-width=2 width="40" /></button></a>
                    <a target="_new" href="https://www.facebook.com/sharer.php?u={encodeURIComponent(window.location.href)}"><button class="facebook"><Icon name="facebook" stroke="var(--white)" stroke-width=2 width="30" />Share on Facebook</button></a>
                    <a target="_new" href="https://twitter.com/intent/tweet?url=https://publications.stand.earth/bc-subsidies/&text={encodeURIComponent(summary.tweet_copy)}&hashtags=bcpoli,cdnpoli"><button class="twitter"><Icon name="twitter" stroke="var(--white)" stroke-width=2 width="30"/>Share on Twitter</button></a>
                </div>
                <div class="social-share">
                    
                </div>
              </Col>
            </Row>
          </Container>
        
        
        
    </div>
  </section>
  
  <style>
    .cover { 
        background-position:cover;
        width:100%;
        min-width:200px;
        background-position: center; /* Center the image */
        background-repeat: no-repeat; /* Do not repeat the image */
        background-size: cover;
    }

    .cover-content {
        padding-top:160px;
    }


    h1 {
        font-family:'Montserrat Bold',Helvetica;
        text-align:left;
        background:var(--stand-primary);
        padding:2%;
        color:#fff;
        width:auto;
        font-weight:bold;
    }

    h2 {
        font-family:'Montserrat',Helvetica;
        font-style:italic;
        font-weight:lighter;
        color:#fff;
    }
    .social-share {
        margin-top:20px;
        text-align:left;
    }

    .pdf-share {
        margin-top:40px;
    }

    button {
        background:var(--red);
        margin-right:20px;
        font-family:var(--sans-bold);
    }
    
    button svg {
        padding:30px;
    }

    button.facebook {
        background:#4267B2;
        padding-right:20px;
        margin-top:20px;
    }
    button.twitter {
        background:#1DA1F2;
        margin-top:20px;
        padding-right:20px;
    }

    button:hover {
        background:var(--stand-secondary);
    }

    @media (max-width:741px) {
        .cover-content {padding-top:50px;margin-left:auto;margin-right:auto;}
    }
  
  </style>
  