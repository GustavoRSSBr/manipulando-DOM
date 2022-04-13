function mudaModo(){
    changeClasses(); 
    changeText();
}

function changeClasses(){
    button.classList. toggle(modoEscuroClass) //coloca ou tira o modo escuro nas classes
    body.classList. toggle(modoEscuroClass)
    footer.classList. toggle(modoEscuroClass)

}

function changeText(){
    const modoClaro = "Modo Claro";
    const ModoEscuro = "Modo Escuro";

    if (body.classList.contains(modoEscuroClass)){
        button.innerHTML = modoClaro;
        return;
    }
    button.innerHTML = ModoEscuro;
}

const modoEscuroClass = 'modo-escuro';
const button = document.getElementsByTagName('button')[0]; //pega os elementos 
const body = document.getElementsByTagName('body')[0];
const footer = document.getElementsByTagName('footer')[0];

button.addEventListener('click', mudaModo); //coloca o evento e a função a ser realizada no elemento button
