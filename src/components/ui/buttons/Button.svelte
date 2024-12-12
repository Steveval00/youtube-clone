<script>

    let className="prova ";
    let defaultClasses= "width:100%";
    export {className as class}
</script>

<button class={`${defaultClasses} ${className}`}><slot>Clicca quì</slot></button>