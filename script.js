let mensagem = document.getElementById('texto01')
let resultado = document.getElementById('texto02')
let naoEncontrado = document.getElementsByClassName('not-found')[0]
const regexMaiusculas = /[A-Z]/;
const regexAcentos = /[À-ü]/;

function copiarTexto() {
    const range = document.createRange();
    range.selectNode(resultado);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand('copy');
    window.getSelection().removeAllRanges();
    
    // remove espaços em branco antes e depois do texto
    const textoCopiado = resultado.value.trim();
    
    resultado.style.backgroundImage = 'url(imagens/garotoLupa.svg)';
    resultado.value = "";

    // remove o botão após a cópia
    this.remove();

    // restaura o valor original do naoEncontrado
    naoEncontrado.innerHTML = `<h2>Nenhuma mensagem encontrada</h2>
    <p>Digite um texto que você deseja criptografar ou descriptografar</p>`;
}

function criptografar() {
    const texto = mensagem.value.toLowerCase()
    let resultadoCriptografado = ""

    for(let i = 0; i < texto.length; i++) {
        switch(texto[i]) {
            case 'a':
                resultadoCriptografado += 'ai'
                break
            case 'e':
                resultadoCriptografado += 'enter'
                break
            case 'i':
                resultadoCriptografado += 'imes'
                break
            case 'o':
                resultadoCriptografado += 'ober'
                break
            case 'u':
                resultadoCriptografado += 'ufat'
                break
            default:
                resultadoCriptografado += texto[i]
                break
        }
    }

    resultado.style.backgroundImage = 'none'
    resultado.value = resultadoCriptografado.trim()
    naoEncontrado.textContent = ""
    mensagem.value = ""
    mensagem.focus()
}

function descriptografar() {
    const texto = mensagem.value.toLowerCase();
    let resultadoDescriptografado = texto
      .replace(/ai/g, 'a')
      .replace(/enter/g, 'e')
      .replace(/imes/g, 'i')
      .replace(/ober/g, 'o')
      .replace(/ufat/g, 'u');
      
    resultado.style.backgroundImage = 'none';
    resultado.value = resultadoDescriptografado.trim();
    naoEncontrado.textContent = ""
    mensagem.value = ""
    mensagem.focus()
}

function cript() {
    mensagem.focus()
    if(mensagem.value == "" || regexMaiusculas.test(mensagem.value) || regexAcentos.test(mensagem.value)) {
        alert("ERROR")
    } else {
    criptografar()
    const botao = document.createElement('button')
    botao.classList.add('botao-copiar')
    botao.innerText = 'Copiar'
    naoEncontrado.appendChild(botao)

    botao.addEventListener('click', copiarTexto)}
}

function descript() {
    if(mensagem.value == "" || regexMaiusculas.test(mensagem.value) || regexAcentos.test(mensagem.value)){
        alert("ERROR")
    } else {
    descriptografar()
    const botao = document.createElement('button')
    botao.classList.add('botao-copiar')
    botao.innerText = 'Copiar'
    naoEncontrado.appendChild(botao)

    botao.addEventListener('click', copiarTexto)}
}


