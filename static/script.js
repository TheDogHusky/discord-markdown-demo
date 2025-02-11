import { toHTML } from '/node_modules/@odiffey/discord-markdown/dist/discord-markdown.mjs';

window.addEventListener('DOMContentLoaded', () => {
    const editor = document.querySelector('.editor');
    const preview = document.querySelector('.result');

    if (editor && preview) {
        function update() {
            preview.innerHTML = toHTML(editor.value);
        }

        editor.addEventListener('input', update);
        update();
    }
});
