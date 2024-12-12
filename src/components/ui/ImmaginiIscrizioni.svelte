<script>
	import { page } from "$app/stores";

</script>


    <img class="icona" src={$page.route.id === "/(logged)/iscrizioni" ? "/icons/iscrizioni-pieno.svg" : "/icons/iscrizioni.svg" } alt="Iscrizioni" />


<style>
    .icona{
        height: 32px;
        cursor: pointer;
      
    }
</style>