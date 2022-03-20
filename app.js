const textInput = document.querySelector('.textInput');

textInput.addEventListener('keypress', e => {
    if (e.key === 'Enter') {
        document.querySelector('.letterText').innerHTML = e.target.value;
        e.target.value = '';
    }
})