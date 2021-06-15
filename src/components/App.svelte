<script>
  import Meta from "./Meta.svelte";
  import Cover from "./report/Cover.svelte";
  import Section1 from "./report/Section1.svelte";
  import Section2 from "./report/Section2.svelte";
  import Section3 from "./report/Section3.svelte";
  import Section4 from "./report/Section4.svelte";
  import Section5 from "./report/Section5.svelte";
  import Section6 from "./report/Section6.svelte";
  import Footer from "./stand/Footer.svelte";
  import { Spinner } from 'sveltestrap';
  import { fade, fly } from 'svelte/transition';
  let loading = true;
  setTimeout(function() {
    return loading = false
    }, 1000);
</script>

<Meta />

{#if loading} 

<div id="spinner" out:fly>
  <Spinner color=primary/>
</div>

{:else}
<div id="page-content" in:fade>
  <Cover />

  <Section1 boundary_orientation="full" left_spacing=23 background="var(--white)" color="var(--stand-tertiary)"/>

  <Section2 boundary_orientation="full" left_spacing=75 background="var(--stand-tertiary)" color="var(--white)"/>

  <Section3 boundary_orientation="none" left_spacing=75 background="var(--stand-primary)" color="var(--white)"/>

  <Section4 boundary_orientation="triangle" left_spacing=18 background="var(--white)" color="var(--stand-tertiary)"/>

  <Section5 boundary_orientation="full" left_spacing=50 background="var(--white)" color="var(--stand-tertiary)"/>

  <Section6 boundary_orientation="triangle" left_spacing=45 background="var(--white)" color="var(--white)"/>

  <Footer />
</div>
{/if}

<style>
  #spinner {
    width:100%;
    height:600px;
    margin-top:30%;
    text-align:center;
  }
</style>