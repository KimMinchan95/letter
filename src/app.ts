const textInput: HTMLInputElement = document.querySelector('.textInput');

textInput.addEventListener('keypress', (e: KeyboardEvent) => {
    if (e.key === 'Enter') {
        const inputValue = (<HTMLInputElement>e.target).value
            document.querySelector('.letterText').innerHTML = inputValue;
            textInput.value = '';
        }
    }
)