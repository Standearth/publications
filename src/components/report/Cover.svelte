<script>
    import Icon from "../helpers/Icon.svelte";
    import viewport from "../../stores/viewport.js";
  </script>
  
  <section class="cover overlay" style="height:{$viewport.height-150}px">
      <div class="cover-content ">
        <h1>Subsidizing Climate Change</h1>
        <h2>How BC gives billions to corporate polluters</h2>
        <div class="pdf-share">
            <a href="#"><button>DOWNLOAD PDF <Icon name="download" width="40" /></button></a>
        </div>
        <div class="social-share">
            <a href="#"><button class="facebook"><Icon name="facebook" width="30" />Share on Facebook</button></a>
            <a href="#"><button class="twitter"><Icon name="twitter" width="30"/>Share on Twitter</button></a>
        </div>
        
    </div>
  </section>
  
  <style>
    .cover { 
        background-image:url('assets/img/cover.jpeg');
        background-position:cover;
        width:100%;
        min-width:400px;
        background-position: center; /* Center the image */
        background-repeat: no-repeat; /* Do not repeat the image */
        background-size: cover;
    }

    .cover-content {
        max-width:500px;
        padding:20px;
        margin-left:30px;
        margin-right:30px;
        padding-top:150px;
        text-align:center;
    }
    h1,h2 {
        font-family:'Gotham','Montserrat Bold',Helvetica;
        background:rgba(255,255,255,0.7);
        text-align:center;
    }
    .social-share {
        margin-top:20px;
    }

    .pdf-share {
        margin-top:40px;
    }

    button {
        background:var(--stand-primary);
    }
    
    button svg {
        padding:10px;
    }

    button.facebook {
        background:#4267B2;
        padding-right:20px;
        margin-top:20px;
        margin-right:20px;
    }
    button.twitter {
        background:#1DA1F2;
        margin-right:20px;
        margin-top:20px;
        padding-right:20px;
    }

    button:hover {
        background:var(--stand-secondary);
    }
    .overlay { position: relative; overflow: hidden; bottom:0px; width:100%;}
    
    
    @media (min-width:741px) {
        .overlay:after,  .overlay:before { content: ''; display: block; height: 50px; background: #fff; position: absolute; bottom: 0; width: 200px; }
        .overlay:before { width: 300px; left: -50px; -ms-transform: skewX(40deg); -webkit-transform: skewX(40deg); transform: skewX(40deg); }
	.overlay:after { width: 100%; left: 272px; -ms-transform: skewX(-40deg); -webkit-transform: skewX(-40deg); transform: skewX(-40deg); }
    }

    @media (max-width:741px) {
        .cover-content {padding-top:50px;width:100%;margin:auto;}
        button.facebook, button.twitter {margin-right:0px;}
	    .overlay:after,  .overlay:before { content: ''; display: block; height: 30px; background: #fff; position: absolute; bottom: 0; width: 200px; }
        .overlay:before { width: 250px; left: -50px; -ms-transform: skewX(40deg); -webkit-transform: skewX(40deg); transform: skewX(40deg); }
	.overlay:after { width: 100%; left: 222px; -ms-transform: skewX(-40deg); -webkit-transform: skewX(-40deg); transform: skewX(-40deg); }
    }


  
  </style>
  