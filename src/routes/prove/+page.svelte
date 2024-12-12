<script>
    let title = "Prova"

    const updateTitle = () => {
        title="NOO hai cambiato il titolo sei un matto"
    }
</script>

<div class="index">
    <h2>{title}</h2>
    <p>questo è un paragrafo questo è un paragrafo  questo è un paragrafo  questo è un paragrafo  questo è un paragrafo  questo è un paragrafo  questo è un paragrafo  questo è un paragrafo </p>
    <a href="/about">About my site</a>
    <br>
    <a href="/prova">Prova?</a>
    <br>
    <button onclick={updateTitle}>Cambia il titolo</button>
    <input type="text" bind:value={title}>
</div>

<style>
.index{
    text-align: center;
    display: block;
    margin: 20px auto;
}
</style>