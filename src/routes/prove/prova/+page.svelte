<script>
    import Prova from "../../../components/route-components/prova/Prova.svelte";
	import Titolo from "../../../components/ui/buttons/Titolo.svelte";

</script>
<Titolo titolo="Cambio titolo"/>

<Prova>
    <div class="container">
        <h1>Prova</h1>
        <p>Questa è una prova</p>
    </div>
    
</Prova>


<style>
    .container {
        margin: 0 auto;
        padding: 20px;
        max-width: 800px;
        text-align: center;
        align-items: center;
    }   
</style>
