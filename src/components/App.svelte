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
</script>

<Meta />

<Cover />

<Section1 boundary_orientation="full" left_spacing=23 background="var(--white)" color="var(--stand-tertiary)"/>

<Section2 boundary_orientation="full" left_spacing=75 background="var(--stand-tertiary)" color="var(--white)"/>

<Section3 boundary_orientation="none" left_spacing=75 background="var(--stand-primary)" color="var(--white)"/>

<Section4 boundary_orientation="triangle" left_spacing=18 background="var(--white)" color="var(--stand-tertiary)"/>

<Section5 boundary_orientation="full" left_spacing=50 background="var(--white)" color="var(--stand-tertiary)"/>

<Section6 boundary_orientation="triangle" left_spacing=45 background="var(--white)" color="var(--white)"/>

<Footer />
