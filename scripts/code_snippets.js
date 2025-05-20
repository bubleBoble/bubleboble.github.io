document.addEventListener('DOMContentLoaded', function () {
        hljs.highlightAll();
        addCopyButtons();
});

function addCopyButtons() {
        const codeBlocks = document.querySelectorAll('pre code');

        codeBlocks.forEach((codeBlock) => {
                const copyButton = document.createElement('button');
                copyButton.classList.add('copy-btn');
                copyButton.textContent = 'Copy';

                const preBlock = codeBlock.closest('pre');
                preBlock.appendChild(copyButton);

                copyButton.addEventListener('click', function () {
                        const code = codeBlock.innerText;
                        navigator.clipboard.writeText(code).then(() => {
                                alert('Code copied to clipboard!');
                        });
                });
        });
}