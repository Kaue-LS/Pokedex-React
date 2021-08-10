// Fazer com que as letras sejam com começo da letra maiuscula
// nao ta default pois pode haver diversas funçoes
export function firstLetter(string){
    return string.charAt(0).toUpperCase() + string.slice(1)
}
// Slice pega a palavra e corta no pornto indcicado
// Pikachu
// Charat(0)= posição 0=[P] indenpendente da string