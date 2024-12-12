<script>
  // Puoi aggiungere logica JS qui, se necessario

	import ImmaginiLike from "../../ui/ImmaginiLike.svelte";

</script>


<div class="container">
  <div class="icon" ><img class="icon" alt="like" src= "/icons/like.svg"/></div> <!-- Puoi sostituire con un'icona SVG più dettagliata -->
  <div class="title">Salva i tuoi video preferiti!</div>
  <div class="subtitle">
      Accedi per mettere like ai video e salvarli nella tua playlist personale
  </div>
  <a href="/profilo" class="button">
      <img src="https://img.icons8.com/ios-filled/50/0066cc/user.png" alt="icon" width="20" height="20" />
      Accedi
  </a>
</div>


<style>
  .container {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top:10%;
      text-align: center;
      height: 100vh;
      font-family: Arial, sans-serif;
  }

  .icon {
      padding:8px;
      margin-left:-5px;
      height: 78px;
      width: 78px;
      font-size: 80px;
      margin-bottom: 30px;
  }

  .title {
      font-size: 24px;
      font-weight: bold;
      margin-bottom: 10px;
  }

  .subtitle {
      font-size: 16px;
      color: #666;
      margin-bottom: 30px;
  }

  .button {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 10px 20px;
      border: 1px solid #ccc;
      border-radius: 20px;
      background-color: #fff;
      cursor: pointer;
      font-size: 16px;
      color: #0066cc;
      text-decoration: none;
  }

  .button:hover {
      background-color: #f0f0f0;
  }
  .button:active {
      background-color: #e0e0e0;
  }

  .button img {
      margin-right: 10px;
  }
</style>

