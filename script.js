const formEl = document.querySelector('form');
const outputEl = document.querySelector('#output');
const inputEl = document.querySelector('#input');
const switchEl = document.querySelector('.switch');
const convertEl = document.querySelector('.convert');
const title = document.querySelector('.title');

formEl.addEventListener('submit', e => {
    e.preventDefault();
    const inputValue = e.target.input.value;
    const inputType = e.target.input.getAttribute('data-type');

    convert(inputType, inputValue);
});

switchEl.addEventListener('click', e => {
    const type = e.target.getAttribute('data-type');
    inputEl.value = '';
    outputEl.value = '';

    if (type === 'binary') {
        e.target.setAttribute('data-type', 'text');
        inputEl.setAttribute('data-type', 'text');
        inputEl.setAttribute('placeholder', 'Enter the message to be encrypted...');
        title.innerText = "From TEXT to BINARY";
        convertEl.innerText = 'ENCRYPT';
    } else if (type === 'text') {
        e.target.setAttribute('data-type', 'binary');
        inputEl.setAttribute('data-type', 'binary');
        inputEl.setAttribute('placeholder', 'Enter the message to be decrypted...');
        title.innerText = "From BINARY to TEXT";
        convertEl.innerText = 'DECRYPT';
        outputEl.innerText = "";
    }
})

function convert(type, value) {
    let output = '';

    if (type === 'binary') {
        output = binarInText(value);
    } else if (type === 'text') {
        output = textInBinar(value);
    }

    outputEl.innerText = output;
}

function binarInText(input) {
    let output = '';
    output = input
        .split(' ') // take every binary number
        .map(number => parseInt(number, 2))
        .map(number => String.fromCharCode(number))
        .join('');

    return output;
}

function textInBinar(input) {
    let output = '';
    output = input
        .split('') // take every character
        .map(letter => letter.charCodeAt(0))
        .map(letter => letter.toString(2))
        .join(' ');

    return output;
}
