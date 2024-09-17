function copyCode(event) {
    const codeContainer = event.target.closest('.code-container').querySelector('pre.code code');
    const range = document.createRange();
    range.selectNode(codeContainer);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand('copy');
    window.getSelection().removeAllRanges();
    alert('Codice copiato!');
}

document.querySelectorAll('.code-container button').forEach(button => {
    button.addEventListener('click', copyCode);
});