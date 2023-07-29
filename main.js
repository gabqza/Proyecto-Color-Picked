const color= document.querySelector("#color");
const salida= document.querySelector("#salida");

//console.log(color.value)

// Eventos

color.addEventListener("input", ()=>{ // función flecha
    console.log(color.value)
    salida.innerHTML=color.value

    salida.style.background= color.value;
    salida.style.color="#FFF"
})
