<script>
	import { page } from "$app/stores";

</script>


    <img class="icona" src={$page.route.id === "/profilo" ? "/icons/account-pieno.svg" : "/icons/account.svg" } alt="Profilo" />


<style>
    .icona{
        height: 32px;
        cursor: pointer;
       
    }
</style>