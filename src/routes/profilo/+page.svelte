<script>
	import { onMount } from "svelte";

	import { isLogged } from "$lib/store/index.svelte.js";
	import Profilo from "../../components/route-components/profilo/Profilo.svelte";
	import Login from "../../components/route-components/profilo/Login.svelte";

  	
  	const Component = $derived(isLogged() ? Profilo : Login);


</script>
  


<Component />


  <style>

  </style>