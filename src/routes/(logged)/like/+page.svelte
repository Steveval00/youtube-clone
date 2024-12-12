<script>
	import { onMount } from "svelte";
	
	import { isLogged } from "$lib/store/index.svelte.js";
	import Like from "../../../components/route-components/like/Like.svelte";
	import Accedi from "../../../components/route-components/like/Accedi.svelte";

  
  const Component = $derived(isLogged() ? Like : Accedi);


</script>
  


<Component />


  <style>

  </style>