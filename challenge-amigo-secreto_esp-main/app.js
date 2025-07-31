// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let lista = document.querySelector("#listaAmigos");
let input_element = document.getElementById("amigo");

let amigos = [];

function agregarAmigo() {
    let value = input_element.value;
    if(value === ""){
        alert("Por favor, inserte un nombre");
    }else{
        amigos.push(value);
    }
    input_element.value = "";
    update();
}

function update() {
    lista.innerHTML = "";
    for(let i = 0; i<amigos.length; i++){
        lista.innerHTML += `<li>${amigos[i]}</li>`;
    }
}

function sortearAmigo() {
    let resultado = document.querySelector("#resultado");
    if(amigos.length > 0){
        let number = Math.floor(Math.random()*amigos.length);
        let chosen = amigos[number];
        resultado.innerHTML = `${chosen}`;
        lista.innerHTML = ""; /*Opcional*/
        amigos = [];          /*Opcional*/
    }
}

