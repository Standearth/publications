<script>
    import Icon from "../helpers/Icon.svelte";
    import viewport from "../../stores/viewport.js";
    import Header from "../stand/Header.svelte";
    import summary from "./../../data/summary.json";
    import { Col, Container, Row } from 'sveltestrap';
  </script>
  
  <section class="cover overlay" style="height:{$viewport.height-80}px; background-image:url('assets/img/cover4.png')">
    <Header />
      <div class="cover-content align-middle">
        <Container>
            <Row>
              <Col sm=12 md=10 lg=12>
                <h1>{summary.title}</h1>
              </Col>
            <Col sm=12 md=6 lg=8>
                <h2>{@html summary.subtitle}</h2>
            </Col>
            <Col sm=12 md=10 lg=12>
                <div class="pdf-share social-share">
                    <a href="#"><button>DOWNLOAD PDF <Icon name="download" stroke="var(--white)" stroke-width=2 width="40" /></button></a>
                    <a href="#"><button class="facebook"><Icon name="facebook" stroke="var(--white)" stroke-width=2 width="30" />Share on Facebook</button></a>
                    <a href="#"><button class="twitter"><Icon name="twitter" stroke="var(--white)" stroke-width=2 width="30"/>Share on Twitter</button></a>
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
        color:#fff;
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
        background:var(--stand-primary);
        margin-right:20px;
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
  