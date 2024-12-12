<script>
	import { page } from "$app/stores";

</script>


    <img class="icona" src={$page.route.id === "/" ? "/icons/home-pieno.svg" : "/icons/home.svg" } alt="Home" />


<style>
    .icona{
        height: 36px;
        width: 36px;
        cursor: pointer;
        margin: -2px;
    }
</style>