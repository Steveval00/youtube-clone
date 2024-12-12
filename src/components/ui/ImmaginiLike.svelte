<script>
	import { page } from "$app/stores";
    
</script>


    <img class="icona" src={$page.route.id === "/(logged)/like" ? "/icons/like-pieno.svg" : "/icons/like.svg" } alt="Like" />


<style>
    .icona{
        height: 26px;
        width: 26px;
        cursor: pointer;
        padding:3px;
    }
</style>