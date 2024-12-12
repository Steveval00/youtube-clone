<script>
	import { on } from 'svelte/events';
  
    import credentials from '$lib/utils/credentials.json';
	import { stringify } from 'postcss';
	import Input from '../../ui/Input.svelte';
    import {setJwt} from '$lib/store/index.svelte.js';
	import Errato from './Errato.svelte';
	
/*
    let {data} = $props();
    console.log(data.test);*/
    let errore = $state(false);
    const Component = $derived(errore ? Errato : "");
    let email = $state("");
    let password = $state("");

  function handleSubmit(e){

   
    e.preventDefault();
        
        /*
        for(tmp in credentials){
          if(tmp.email === email && tmp.password === password){
            window.location.href = "/profilo";
        }*/

        let user = credentials.find((el) => el.username === email && el.pass === password);

        
        if (user){
          //json contiene i dati dell'utente
            console.log("Utente trovato");
            localStorage.setItem('jwt', email + " " + password);
            localStorage.setItem('user', JSON.stringify(user));
            setJwt(email + " " + password);
            errore = false;

        } else {
            //se il json è vuoto
            console.log("Utente non trovato o credenziali errate");
            errore = true;
        }

    

    }
</script>
  
  <div class="login-form">
    <h1>Login</h1>
    <p>Accedi per continuare alla tua pagina di YouTube</p>
    <form onsubmit={(e) => handleSubmit(e)}>
      <Input
        label="Email"
        type="email"
        placeholder="Inserisci la tua email"
        bind:value={email}
      />
      <Input
        label="Password"
        type="password"
        placeholder="Inserisci la tua password"
        bind:value={password}
      />
      
      <button type="submit">Accedi</button>
      <br>
      <Component/>
    </form>
  </div>
  
  <style>
    .login-form {
      
      max-width: 400px;
      margin: 0 auto;
      margin-top:5%;
      padding: 2rem;
      background: #fff;
      border-radius: 10px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      text-align: center;
    }
    h1 {
      margin-bottom: 1rem;
      color: #ff0000;
    }

    p {
      margin-bottom: 2rem;
      color: #555;
    }

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
