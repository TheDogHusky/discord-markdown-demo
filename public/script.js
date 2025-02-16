window.addEventListener('DOMContentLoaded', () => {
    const editor = document.querySelector('.editor');
    const preview = document.querySelector('.result');

    if (editor && preview) {
        if (window.screen.width < 768) {
            editor.style.height = editor.scrollHeight + "px";
            editor.addEventListener("input", () => {
                editor.style.height = editor.scrollHeight + "px";
            });
        }

        function update() {
            preview.innerHTML = window["discord-markdown"].toHTML(editor.value);
        }

        editor.addEventListener('input', update);
        update();
    }
});
