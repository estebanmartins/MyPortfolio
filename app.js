// const modoNoche = document.getElementById("darkmode")
// const hero = document.getElementById("hero")
// const night = document.querySelectorAll(".night")

// modoNoche.addEventListener("click",()=>{
//     night.style.backgroundColor = "white"
   

// })

// let btnModoOscuro = document.querySelector('.boton-mo')


let botonMenuOpen = document.querySelector(".menubars")
let botonMenuClose = document.querySelector(".cerrar")
let menuCont = document.querySelector('.menu-responsive')
let menuLista = document.querySelector('.menu-desplegable')





let seccAmarillas = document.querySelectorAll('.fon-amarillo') 
let secBlancas = document.querySelectorAll('.fon-blanco')

botonMenuOpen.addEventListener('click', e =>{
    menuCont.style.display = 'block'
    botonMenuOpen.style.display = 'none'
    botonMenuClose.style.display = 'block'
    menuLista.style.display = 'flex'
})

botonMenuClose.addEventListener('click', e =>{
    botonMenuOpen.style.display = 'block'
    menuCont.style.display = 'none'
    botonMenuClose.style.display = 'none'
})



// btnModoOscuro.addEventListener('click', e =>{
//     navBar.classList.toggle('nav-osc');

//     secBlancas.forEach((item)=>{
//         item.classList.toggle('fondo-negro');
//     })
// /*     seccAmarillas.classList.toggle('fondo-negro') */
    
// })