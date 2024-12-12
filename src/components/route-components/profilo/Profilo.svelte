<script>
	import { goto } from "$app/navigation";
    import { setJwt } from "$lib/store/index.svelte.js";

    function handleClick() {
        localStorage.removeItem('jwt');
        localStorage.removeItem('user');
        setJwt(undefined);
        goto('/');
    }

</script>

<div align="center">
    <h1>Pagina profilo</h1>
    <button type="button" onclick={handleClick()}>Logout</button>


</div>

 


<style>
    button {
      padding: 0.8rem 1.2rem;
      background-color: #ff0000;
      color: white;
      font-size: 1rem;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      transition: background 0.3s;
    }

    button:hover {
      background-color: #cc0000;
    }
    button:active {
      background-color: #a10000;
    }
</style>