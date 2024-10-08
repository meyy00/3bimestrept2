const array1 = ["Ana", "Bruno", "Carlos"];
const array2 = ["Daniela", "Eduardo", "Fernanda"];

// Função para juntar os dois arrays
function juntarArrays() {
    const arrayJuntado = array1.concat(array2);
    return arrayJuntado;
}

// Função para inverter o array
function inverterArray(array) {
    return array.slice().reverse();
}

// Função para adicionar itens de array em uma lista
function addItemsToList(array, listId) {
    const listaElemento = document.getElementById(listId);
    listaElemento.innerHTML = ''; // Limpa a lista existente

    array.forEach(item => {
        const listaItem = document.createElement("li");
        listaItem.textContent = item;
        listaElemento.appendChild(listaItem);
    });
}

// Função para exibir os arrays
function displayArrays() {
    const arrayJuntado = juntarArrays();
    addItemsToList(arrayJuntado, "array-juntado");

    const arrayInvertido = inverterArray(arrayJuntado);
    addItemsToList(arrayInvertido, "array-invertido");
}

// Exibe os arrays ao carregar a página
window.onload = displayArrays;






