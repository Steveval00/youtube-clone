<script>
	import { onMount } from "svelte";
	
	import { isLogged } from "$lib/store/index.svelte.js";
	import Iscrizioni from "../../../components/route-components/iscrizioni/Iscrizioni.svelte";
	import Accedi from "../../../components/route-components/iscrizioni/Accedi.svelte";

  
  const Component = $derived(isLogged() ? Iscrizioni : Accedi);


</script>
  


<Component />


  <style>

  </style>