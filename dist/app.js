var textInput = document.querySelector('.textInput');
textInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        var inputValue = e.target.value;
        document.querySelector('.letterText').innerHTML = inputValue;
        textInput.value = '';
    }
});
//# sourceMappingURL=app.js.map