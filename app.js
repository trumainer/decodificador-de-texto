const textArea = document.querySelector('.decodificador__esquerdo__main__texto');
const traducao = document.querySelector('.traducao');
const traducaoFilho = document.querySelector('.traducao__texto');
const mensagem = document.querySelector('.mensagem');

// As "chaves" de criptografia que utilizaremos são:
// A letra "e" é convertida para "enter"
// A letra "i" é convertida para "imes"
// A letra "a" é convertida para "ai"
// A letra "o" é convertida para "ober"
// A letra "u" é convertida para "ufat"

function copiar(){
    navigator.clipboard.writeText(traducaoFilho.value);
    document.getElementById("textBox").value = '';
}
function criptografar(){
    if (!textArea.value){
        return;
    }
    let textoEncriptado = encriptar(textArea.value);
    traducaoFilho.value = textoEncriptado;
    traducao.style.display = 'flex';
    mensagem.style.display = 'none';
}
function descriptografar(){
    let textoDesencriptar = desencriptar(textArea.value);
    traducaoFilho.value = textoDesencriptar;
}
function encriptar(stringEncriptar){
    let matrizEncriptador = [['e' , 'enter'], ['i', 'imes'], ['a', 'ai'], ['o', 'ober'], ['u', 'ufat']];
    stringEncriptar = stringEncriptar.toLowerCase();
    
    for(let i = 0; i < matrizEncriptador.length; i++){
        if(stringEncriptar.includes(matrizEncriptador[i][0])) {
            stringEncriptar = stringEncriptar.replaceAll(matrizEncriptador[i][0], matrizEncriptador[i][1]);
        }
    }
    return stringEncriptar;
}
function desencriptar(stringDesencriptar){
    let matrizEncriptador = [['e', 'enter'], ['i', 'imes'], ['a', 'ai'], ['o', 'ober'], ['u', 'ufat']];
    stringDesencriptar = stringDesencriptar.toLowerCase();

    for(let i = 0; i < matrizEncriptador.length; i++){
        if(stringDesencriptar.includes(matrizEncriptador[i][1])){
            stringDesencriptar = stringDesencriptar.replaceAll(matrizEncriptador[i][1], matrizEncriptador[i][0]);
        }
    }
    return stringDesencriptar;
}