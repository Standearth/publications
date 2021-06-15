<script>
  import wordmark from "../../svg/stand/logo_white.svg";
</script>

<header>
  <div class="wordmark">
    <a href="https://stand.earth" target="_new">{@html wordmark}</a>
  </div>
  <div class="take-action">
    <a href="https://act.stand.earth/page/30485/action/1?ea.tracking.id=referrals" target="_new"><button>TAKE ACTION</button></a>
  </div>
</header>

<style>
  header { 
    min-width:310px;
    height:60px;
    background: rgb(0,0,0);
    background: linear-gradient(0deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.4) 100%);
  }

  .wordmark {
    max-width: 10em;
    float:left;
    padding-left:30px;
  }

  .take-action {
    float:right;
    padding-right:30px;
    padding-top:12px;  
  }

  .take-action button {
    background:var(--stand-primary);
  }

  .wordmark a {
    border: none;
    color: var(--fg);
  }

  .wordmark svg {
    max-width:120px;
  }

  .wordmark a:hover {
    background-color: transparent;
  }
</style>
