<script>
  import wordmark from "../../svg/stand/logo.svg";
</script>

<header>
  <div class="wordmark">
    <a href="https://stand.earth">{@html wordmark}</a>
  </div>
  <div class="take-action">
    <a href="https://stand.earth"><button>TAKE ACTION</button></a>
  </div>
</header>

<style>
  header { 
    min-width:400px;
    height:60px;
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

  .wordmark a {
    border: none;
    color: var(--fg);
  }

  .wordmark svg {
    max-width:150px;
  }

  .wordmark a:hover {
    background-color: transparent;
  }
</style>
