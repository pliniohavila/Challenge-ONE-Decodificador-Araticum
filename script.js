/*
A letra "e" é convertida para "enter"
A letra "i" é convertida para "imes"
A letra "a" é convertida para "ai"
A letra "o" é convertida para "ober"
A letra "u" é convertida para "ufat"
*/

function mudaDisplay() {
    document.querySelector('.sem-saida').style.display = 'none'
    document.querySelector('.saida-texto').style.display = 'block'
}

function criptografar() {
    let textoRecebido = document.querySelector('textarea').value
    let textoCriptografado = textoRecebido.replace(/e+/g, 'enter')
    textoCriptografado = textoCriptografado.replace(/i+/g, 'imes')
    textoCriptografado = textoCriptografado.replace(/a+/g, 'ai')
    textoCriptografado = textoCriptografado.replace(/o+/g, 'ober')
    textoCriptografado = textoCriptografado.replace(/u+/g, 'ufat')

    mudaDisplay()
    document.querySelector('.saida-texto-conteudo').innerText = textoCriptografado
}

function descriptografar() {
    let textoRecebido = document.querySelector('textarea').value
    let textoDescriptografado = textoRecebido.replace(/enter+/g, 'e')
    textoDescriptografado = textoDescriptografado.replace(/imes+/g, 'i')
    textoDescriptografado = textoDescriptografado.replace(/ai+/g, 'a')
    textoDescriptografado = textoDescriptografado.replace(/ober+/g, 'o')
    textoDescriptografado = textoDescriptografado.replace(/ufat+/g, 'u')

    mudaDisplay()
    document.querySelector('.saida-texto-conteudo').innerText = textoDescriptografado
}

function copiar() {
    let conteudo = document.querySelector('.saida-texto-conteudo').innerText
    navigator.clipboard.writeText(conteudo)
}