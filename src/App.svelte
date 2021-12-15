<script>
    (async function() {
        const { text } = await( await fetch(`/api/todos`)).json();
        document.querySelector('#name').textContent = text;
    }())
</script>

<div id="name">...</div>