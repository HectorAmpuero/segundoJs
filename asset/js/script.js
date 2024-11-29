// primerEjercicio
const imagen = document.querySelector('.imagen > img');

imagen.addEventListener('click', () => {
    if (imagen.style.border == '') {
        imagen.style.border = '2px solid #6804eb'; 
    } else {
        imagen.style.border = ''; 
    }
});


// segundoEjercicio

const input1 = document.querySelector("#sticker1");
const input2 = document.querySelector("#sticker2");
const input3 = document.querySelector("#sticker3");
const verificarBtn = document.querySelector(".btn1");
const textAviso = document.querySelector(".textAviso");


verificarBtn.addEventListener("click", () => {
    
    const valor1 = parseInt(input1.value) || 0; 
    const valor2 = parseInt(input2.value) || 0;
    const valor3 = parseInt(input3.value) || 0;

    const totalStickers = valor1 + valor2 + valor3;

    if (totalStickers <= 10) {
        textAviso.innerHTML = `Llevas ${totalStickers} stickers.`;
    } else {
        textAviso.innerHTML = "Llevas demasiados stickers.";
    }
});

// tercerEjercicio

const select1 = document.querySelector('#primer')
const select2 = document.querySelector('#segundo')
const select3 = document.querySelector('#tercer')

const respuesta = document.querySelector('.respuesta')
const boton = document.querySelector('.btn2')

boton.addEventListener ('click' , () => {
    const pass = select1.value + select2.value + select3.value
    if(pass === '911') {
    respuesta.innerHTML = 'Password correcta hechicero'
    } else if(pass === '714') {
    respuesta.innerHTML = 'Password correcta hechicero'
    } else { respuesta.innerHTML = 'Password incorrecta hechicero'

    }

    
})